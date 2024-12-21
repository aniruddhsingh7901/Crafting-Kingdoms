import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
import { PrivateKeyWallet } from "@thirdweb-dev/auth/evm";

const wallet = new PrivateKeyWallet("0x5b0b4c9fd1ffc668ca18c153df80aee4ba7c510c245c9107ae16dbf35fd039f6");

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  domain: "localhost:3000",
  wallet,
  callbacks: {
    onLogin: async (address) => {
      // Handle successful login here
      console.log("User logged in:", address);
      return true;
    },
  },
});

export default ThirdwebAuthHandler();
