-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_industryId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "industry" TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_industryId_fkey" FOREIGN KEY ("industryId") REFERENCES "IndustryInsight"("id") ON DELETE SET NULL ON UPDATE CASCADE;
