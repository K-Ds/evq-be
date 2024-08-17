import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["Started", "In Progress", "Completed"],
    required: true,
  },
  clienId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Client",
  },
});

const ProjectModel = mongoose.model("Project", ProjectSchema);

export default ProjectModel;
