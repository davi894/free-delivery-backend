/*
  Warnings:

  - You are about to drop the `FeedBack` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FeedBack" DROP CONSTRAINT "FeedBack_receiverId_fkey";

-- DropForeignKey
ALTER TABLE "FeedBack" DROP CONSTRAINT "FeedBack_senderId_fkey";

-- DropTable
DROP TABLE "FeedBack";

-- CreateTable
CREATE TABLE "Feedback" (
    "id" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "senderId" TEXT NOT NULL,
    "receiverId" TEXT NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Feedback" ADD CONSTRAINT "Feedback_receiverId_fkey" FOREIGN KEY ("receiverId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
