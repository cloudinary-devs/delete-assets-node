const fs = require( 'fs' );

require('dotenv').config();

const cloudinary = require('cloudinary').v2;

if (typeof process.env.CLOUDINARY_URL === 'undefined') {
    console.warn("Check you've got a .env file in the root of the project with the CLOUDINARY_URL environment variable for your Cloudinary product environment.");
  }

// Return "https" URLs by setting secure: true
cloudinary.config({
    secure: true
  });

/////////////////////////
// Uploads a file
/////////////////////////
const uploadAsset = async (assetPath) => {

    // Use the uploaded file's name as the asset's public ID and 
    // allow overwriting the asset with new versions
    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
      folder: "docs",
      resource_type: "auto",
      //type: "authenticated"
    };

    try {
      // Upload the asset
      const result = await cloudinary.uploader.upload(assetPath, options);
      console.log(result);
      return result.public_id;
    } catch (error) {
      console.error(error);
    }
};

//////////////////
//
// Main function
//
//////////////////
(async () => {

    try {
        const files = await fs.promises.readdir("./assets");
        for (const file of files)
        {
          let assetPath = "./assets/" + file;
          // Call the function to upload the asset
          await uploadAsset(assetPath);
        }
      } catch (err) {
        console.error(err);
      }

})();




