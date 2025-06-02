import mongoose, { model, Schema } from 'mongoose';

const sessionSchema = new Schema(
  {
    accessToken: { type: String, required: true },
    refreshToken: { type: String, required: true },
    accessTokenValidUntil: { type: Date, required: true },
    refreshTokenValidUntil: { type: Date, required: true },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

export const SessionCollection = model('sessions', sessionSchema);
