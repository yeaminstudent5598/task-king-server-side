import { EncryptJWT } from "jose";
import { genaretSecretKey } from "../../config/joseSecret.js";

export const createAccesToken = async (req, res) => {
  const user = req.body;

  if (!user) {
    return res.send({ error: "User not found" }, 401);
  }
  const secret = await genaretSecretKey();
  const payload = {
    email: user?.email,
    uid: user?.uid,
  };
  const accessToken = await new EncryptJWT(payload)
    .setProtectedHeader({ alg: "dir", enc: "A256GCM" })
    .setIssuedAt()
    .encrypt(secret);

  const isProduction = process.env.NODE_ENV === "production";

  return res
    .cookie("accessToken", accessToken, {
      httpOnly: true,
      secure: isProduction,
      sameSite: isProduction ? "None" : "Lax",
    })
    .send({ succes: true });
};
