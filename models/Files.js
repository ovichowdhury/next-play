import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
  key: String,
  mimeType: String,
});

const FilesSchema = new mongoose.Schema({
  files: [FileSchema],
  status: {
    type: String,
    enum: ["P", "S", "F"],
    default: "P",
  },
  createdBy: {
    type: String,
    required: true,
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
});

export default mongoose.models.Files || mongoose.model("Files", FilesSchema);
