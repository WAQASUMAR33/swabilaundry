"use client";

import React, { useState, useEffect } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Toolbar,
  InputBase,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
  IconButton,
  TablePagination,
} from "@mui/material";
import Image from 'next/image';
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
import {
  useTable,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";
import { FaUserEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import CloseIcon from "@mui/icons-material/Close";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";
import axios from "axios";

const HomePageEditor = () => {
  const [homePages, setHomePages] = useState([]);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [editingHomePage, setEditingHomePage] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    type: "",
  });
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    open: false,
    id: null,
  });

  const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
  const [imagePreviews, setImagePreviews] = useState({});
  const [formData, setFormData] = useState({
    slug: "",
    meta_title: "",
    meta_description: "",
    meta_keywords: "",
    heading1: "",
    heading2: "",
    heading3: "",
    heading4: "",
    content1: "",
    content2: "",
    content3: "",
    content4: "",
    img1: null,
    img2: null,
    img3: null,
    img4: null,
    others: "",
  });

  useEffect(() => {
    fetchHomePages();
  }, []);

  const router = useRouter();
  const [userRole, setUserRole] = useState("");


  const NEXT_PUBLIC_UPLOADED_IMAGE_URL = process.env.NEXT_PUBLIC_UPLOADED_IMAGE_URL;


  useEffect(() => {
    const token = Cookies.get("token");
    // if (!token) {
    //   alert("Login to see the dashboard!");
    //   router.push("/admin");
    // } else {
    //   const decodedToken = jwtDecode(token);
    //   setUserRole(decodedToken.role);
    //   console.log("User Role:", decodedToken.role);
    // }
  }, [router]);

  const fetchHomePages = async () => {
    try {
      const response = await axios.get("/api/homepage");
      setHomePages(response.data);
    } catch (error) {
      console.error("Error fetching home pages:", error);
      setSnackbar({
        open: true,
        message: "Failed to fetch home pages.",
        type: "error",
      });
    }
  };

  const handleAddOpen = () => {
    setFormData({
      slug: "",
      meta_title: "",
      meta_description: "",
      meta_keywords: "",
      heading1: "",
      heading2: "",
      heading3: "",
      heading4: "",
      content1: "",
      content2: "",
      content3: "",
      content4: "",
      img1: null,
      img2: null,
      img3: null,
      img4: null,
      others: "",
    });
    setOpenAddDialog(true);
  };

  const handleAddClose = () => {
    setOpenAddDialog(false);
  };

  const handleEditOpen = (homePage) => {
    setEditingHomePage(homePage);
    setFormData({
      slug: homePage.slug,
      meta_title: homePage.meta_title,
      meta_description: homePage.meta_description,
      meta_keywords: homePage.meta_keywords,
      heading1: homePage.heading1,
      heading2: homePage.heading2,
      heading3: homePage.heading3,
      heading4: homePage.heading4,
      content1: homePage.content1,
      content2: homePage.content2,
      content3: homePage.content3,
      content4: homePage.content4,
      img1: homePage.img1,
      img2: homePage.img2,
      img3: homePage.img3,
      img4: homePage.img4,
      others: homePage.others,
    });
    setOpenEditDialog(true);
  };

  const handleEditClose = () => {
    setOpenEditDialog(false);
    setEditingHomePage(null);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleImageChange = (e, fieldName) => {
  //   const file = e.target.files[0];
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [fieldName]: file,
  //   }));
  // };


  const handleImageChange = (e, fieldName) => {
    const file = e.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      
      setImagePreviews((prev) => ({
        ...prev,
        [fieldName]: objectURL,
      }));
  
      setFormData((prevData) => ({
        ...prevData,
        [fieldName]: file,
      }));
    }
  };
  
  // Cleanup object URLs to avoid memory leaks
  useEffect(() => {
    return () => {
      Object.values(imagePreviews).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [imagePreviews]);
  
  const getImageSrc = (field) => {
    if (imagePreviews[field]) {
      return imagePreviews[field]; // Preview uploaded image
    }
    
    if (typeof formData[field] === "string" && formData[field]) {
      // Ensure the stored image has a full URL
      return formData[field].startsWith("http") || formData[field].startsWith("/")
        ? formData[field] // Use absolute URL as is
        : `${NEXT_PUBLIC_UPLOADED_IMAGE_URL}/${formData[field]}`; // Append to base URL
    }
  
    return "/default-placeholder.png"; // Default fallback
  };
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      if (!(file instanceof Blob)) {
        reject(new Error("Provided value is not a file or blob"));
        return;
      }

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const uploadImageToExternalAPI = async (imageBase64) => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_UPLOAD_IMAGE_API}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageBase64 }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to upload image");
      }

      return result.image_url;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw new Error("Image upload failed");
    }
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();

    if (!formData.slug || !formData.heading1 || !formData.content1) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields.",
        type: "error",
      });
      return;
    }

    const imageFields = ["img1", "img2", "img3", "img4"];
    for (const field of imageFields) {
      if (formData[field]) {
        const imageBase64 = await convertToBase64(formData[field]);
        const uploadedImageUrl = await uploadImageToExternalAPI(imageBase64);
        formData[field] = uploadedImageUrl;
      }
    }

    try {
      await axios.post("/api/homepage", formData);
      setSnackbar({
        open: true,
        message: "Home page added successfully.",
        type: "success",
      });
      fetchHomePages();
      handleAddClose();
    } catch (error) {
      console.error("Error adding home page:", error);
      setSnackbar({
        open: true,
        message: "Failed to add home page.",
        type: "error",
      });
    }
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    if (!formData.slug || !formData.heading1 || !formData.content1) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields.",
        type: "error",
      });
      return;
    }

    const imageFields = ["img1", "img2", "img3", "img4"];
    for (const field of imageFields) {
      if (formData[field] instanceof File) {
        const imageBase64 = await convertToBase64(formData[field]);
        const uploadedImageUrl = await uploadImageToExternalAPI(imageBase64);
        formData[field] = uploadedImageUrl;
      }
    }

    try {
      await axios.put(`/api/homepage/${editingHomePage.id}`, formData);
      setSnackbar({
        open: true,
        message: "Home page updated successfully.",
        type: "success",
      });
      fetchHomePages();
      handleEditClose();
    } catch (error) {
      console.error("Error updating home page:", error);
      setSnackbar({
        open: true,
        message: "Failed to update home page.",
        type: "error",
      });
    }
  };

  const handleDelete = (id) => {
    setDeleteConfirmation({ open: true, id });
  };

  const handleConfirmDelete = async () => {
    try {
      await axios.delete(`/api/homepage/${deleteConfirmation.id}`);
      setSnackbar({
        open: true,
        message: "Home page deleted successfully.",
        type: "warning",
      });
      fetchHomePages();
    } catch (error) {
      console.error("Error deleting home page:", error);
      setSnackbar({
        open: true,
        message: "Failed to delete home page.",
        type: "error",
      });
    } finally {
      setDeleteConfirmation({ open: false, id: null });
    }
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation({ open: false, id: null });
  };

  const columns = React.useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "Slug",
        accessor: "slug",
      },
      {
        Header: "Heading 1",
        accessor: "heading1",
      },
      {
        Header: "Content 1",
        accessor: "content1",
      },
      {
        Header: "Created At",
        accessor: "createdAt",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: "Updated At",
        accessor: "updatedAt",
        Cell: ({ value }) => new Date(value).toLocaleDateString(),
      },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: ({ row }) => (
          <div className="flex gap-6">
            <FaUserEdit
              onClick={() => handleEditOpen(row.original)}
              style={{
                fontSize: "26px",
                color: "#006a5c",
                paddingRight: "6px",
                cursor: "pointer",
              }}
            />
            {userRole !== "sub admin" && (
              <MdDeleteForever
                onClick={() => handleDelete(row.original.id)}
                style={{ fontSize: "26px", color: "#b03f37", cursor: "pointer" }}
              />
            )}
          </div>
        ),
      },
    ],
    [userRole]
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    state,
    setGlobalFilter,
    gotoPage,
    setPageSize,
  } = useTable(
    {
      columns,
      data: homePages,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { pageIndex, pageSize, globalFilter } = state;

  return (
    <div style={{ padding: "20px" }}>
      {/* Toolbar */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <Toolbar>
          <InputBase
            value={globalFilter || ""}
            onChange={(e) => setGlobalFilter(e.target.value || undefined)}
            placeholder="Search"
            style={{ padding: "6px 10px", backgroundColor: "#eaeaea", borderRadius: "4px" }}
          />
        </Toolbar>
        <Button variant="contained" color="primary" onClick={handleAddOpen}>
          Add New Home Page
        </Button>
      </div>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table {...getTableProps()}>
          <TableHead>
            {headerGroups.map((headerGroup) => (
              <TableRow key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <TableCell key={column.id} {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render("Header")}
                    {column.isSorted ? (column.isSortedDesc ? " 🔽" : " 🔼") : ""}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableHead>
          <TableBody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <TableRow key={row.id} {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <TableCell key={cell.id} {...cell.getCellProps()}>
                      {cell.render("Cell")}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
            {page.length === 0 && (
              <TableRow>
                <TableCell colSpan={columns.length} align="center">
                  No home pages found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25, { label: "All", value: homePages.length }]}
        component="div"
        count={homePages.length}
        rowsPerPage={pageSize}
        page={pageIndex}
        onPageChange={(event, newPage) => gotoPage(newPage)}
        onRowsPerPageChange={(event) => setPageSize(Number(event.target.value))}
      />

      {/* Add Home Page Dialog */}
      <Dialog open={openAddDialog} onClose={handleAddClose} maxWidth="xl" fullWidth>
        <DialogTitle>
          Add New Home Page
          <IconButton
            aria-label="close"
            onClick={handleAddClose}
            sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleAddSubmit}>
            <TextField
              label="Slug"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Meta Title"
              name="meta_title"
              value={formData.meta_title}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Meta Description"
              name="meta_description"
              value={formData.meta_description}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Meta Keywords"
              name="meta_keywords"
              value={formData.meta_keywords}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Heading 1"
              name="heading1"
              value={formData.heading1}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
           <ReactQuill
              value={formData.content1}
              onChange={(value) => setFormData((prevData) => ({ ...prevData, content1: value }))}
              theme="snow"
              style={{ marginBottom: "20px" }}/>

              
            <TextField
              label="Heading 2"
              name="heading2"
              value={formData.heading2}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
           <ReactQuill
              value={formData.content1}
              onChange={(value) => setFormData((prevData) => ({ ...prevData, content2: value }))}
              theme="snow"
              style={{ marginBottom: "20px" }}/>
            <TextField
              label="Heading 3"
              name="heading3"
              value={formData.heading3}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <ReactQuill
              value={formData.content1}
              onChange={(value) => setFormData((prevData) => ({ ...prevData, content3: value }))}
              theme="snow"
              style={{ marginBottom: "20px" }}/>
            <TextField
              label="Heading 4"
              name="heading4"
              value={formData.heading4}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <ReactQuill
              value={formData.content1}
              onChange={(value) => setFormData((prevData) => ({ ...prevData, content4: value }))}
              theme="snow"
              style={{ marginBottom: "20px" }}/>
            <TextField
              label="Others"
              name="others"
              value={formData.others}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            {/* Image Inputs */}
            {["img1", "img2", "img3", "img4"].map((field, index) => (
              <div key={field}>
                <input
                  type="file"
                  accept="image/*"
                  name={field}
                  onChange={(e) => handleImageChange(e, field)}
                  style={{ display: "block", marginTop: "10px" }}
                />
                {formData[field] && (
                 <Image
                 width={100}
                 height={100}
                 src={
                   formData[field] instanceof File
                     ? URL.createObjectURL(formData[field]) // Convert file to temporary URL
                     : formData[field] // Use absolute URL from API if available
                 }
                 alt={`Preview ${index + 1}`}
                 style={{ maxWidth: "100px", marginTop: "10px" }}
               />
                )}
              </div>
            ))}
            <DialogActions>
              <Button onClick={handleAddClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Add
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Edit Home Page Dialog */}
      <Dialog open={openEditDialog} onClose={handleEditClose} maxWidth="xl" fullWidth>
        <DialogTitle>
          Edit Home Page
          <IconButton
            aria-label="close"
            onClick={handleEditClose}
            sx={{ position: "absolute", right: 8, top: 8, color: (theme) => theme.palette.grey[500] }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form onSubmit={handleEditSubmit}>
            <TextField
              label="Slug"
              name="slug"
              value={formData.slug}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Meta Title"
              name="meta_title"
              value={formData.meta_title}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Meta Description"
              name="meta_description"
              value={formData.meta_description}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Meta Keywords"
              name="meta_keywords"
              value={formData.meta_keywords}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Heading 1"
              name="heading1"
              value={formData.heading1}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
           <ReactQuill
              value={formData.content1}
              onChange={(value) => setFormData((prevData) => ({ ...prevData, content1: value }))}
              theme="snow"
              style={{ marginBottom: "20px" }}/>


            <TextField
              label="Heading 2"
              name="heading2"
              value={formData.heading2}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
           <ReactQuill
              value={formData.content2}
              onChange={(value) => setFormData((prevData) => ({ ...prevData, content2: value }))}
              theme="snow"
              style={{ marginBottom: "20px" }}/>


             <TextField
              label="Heading 3"
              name="heading3"
              value={formData.heading3}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
              />
            <ReactQuill
              value={formData.content3}
              onChange={(value) => setFormData((prevData) => ({ ...prevData, content3: value }))}
              theme="snow"
              style={{ marginBottom: "20px" }}/>



            <TextField
              label="Heading 4"
              name="heading4"
              value={formData.heading4}
              onChange={handleInputChange}
              fullWidth
              required
              margin="normal"
            />
           <ReactQuill
              value={formData.content4}
              onChange={(value) => setFormData((prevData) => ({ ...prevData, content4: value }))}
              theme="snow"
              style={{ marginBottom: "20px" }}/>
            <TextField
              label="Others"
              name="others"
              value={formData.others}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            {/* Image Inputs */}
            {["img1", "img2", "img3", "img4"].map((field, index) => (
              <div key={field}>
                <input
                  type="file"
                  accept="image/*"
                  name={field}
                  onChange={(e) => handleImageChange(e, field)}
                  style={{ display: "block", marginTop: "10px" }}
                />
                {formData[field] && (
                // Render image preview
                <Image
                  width={100}
                  height={100}
                  src={getImageSrc(field)} // Dynamically resolve source
                  alt={`Preview ${index + 1}`}
                  style={{ maxWidth: "100px", marginTop: "10px" }}
                />
                )}
              </div>
            ))}
            <DialogActions>
              <Button onClick={handleEditClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary" variant="contained">
                Save Changes
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmation.open} onClose={handleCancelDelete}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>Are you sure you want to delete this home page?</DialogContent>
        <DialogActions>
          <Button onClick={handleCancelDelete} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmDelete} color="secondary" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={3000}
        onClose={() => setSnackbar({ open: false, message: "", type: "" })}
      >
        <Alert onClose={() => setSnackbar({ open: false, message: "", type: "" })} severity={snackbar.type}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default HomePageEditor;
