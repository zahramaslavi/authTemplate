import mongoose, { Document, Model }  from "mongoose";

export interface IOauthUser extends Document {
  username: string;
  refresh_token?: string;
}

// Define the interface for the User model (including static methods)
interface IOauthUserModel extends Model<IOauthUser> {
}

const Schema = mongoose.Schema;

const oauthUserSchema = new Schema<IOauthUser>({
  username: {
    type: String,
  },
  refresh_token: {
    type: String,
    required: [false]
  }
}, {timestamps: true});


const OauthUser = mongoose.model<IOauthUser, IOauthUserModel>("oauthUser", oauthUserSchema)
export default OauthUser;