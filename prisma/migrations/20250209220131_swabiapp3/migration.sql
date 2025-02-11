-- DropIndex
DROP INDEX `Subcategory_categoryId_fkey` ON `subcategory`;

-- CreateTable
CREATE TABLE `Slider` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `imgurl` VARCHAR(191) NOT NULL,
    `link` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Subcategory` ADD CONSTRAINT `Subcategory_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `Category`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
