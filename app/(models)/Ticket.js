import mongoose, {Schema} from "mongoose";

// mongoose.connect(process.env.MONGO_URI);
mongoose.connect(process.env.MONGO_URI, {
    serverSelectionTimeoutMS: 30000, // 30 seconds
    socketTimeoutMS: 45000, // 45 seconds
    keepAlive: true,
  });
mongoose.Promise = global.Promise

const ticketSchema = new Schema (
    {
        title: String,
        description: String,
        category: String,
        priority:Number,
        progress:Number,
        status: String,
        active: Boolean,
    },
    {
        timestamps: true,
    }
);

// const Ticket = mongoose.model('Ticket', ticketSchema)
const Ticket = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);
export default Ticket;