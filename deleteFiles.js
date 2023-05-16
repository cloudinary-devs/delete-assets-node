require('dotenv').config();

const cloudinary = require('cloudinary').v2;

if (typeof process.env.CLOUDINARY_URL === 'undefined') {
    console.warn("Check you've got a .env file in the root of the project with the CLOUDINARY_URL environment variable for your Cloudinary product environment.");
  }

// Return "https" URLs by setting secure: true
cloudinary.config({
    secure: true
  });


//////////////////
//
// Main function
//
//////////////////
(async () => {

    //-----------------
    // Destroy examples
    //-----------------

    cloudinary.uploader
    .destroy('docs/bird')
    .then(result => console.log(result));

/*     cloudinary.uploader
    .destroy('docs/drone', {resource_type: 'video', type: 'authenticated'})
    .then(result => console.log(result)); */

/*     cloudinary.uploader
    .destroy('docs/lemonade', {resource_type: 'video', invalidate: true, type: 'authenticated'})
    .then(result => console.log(result)); */

    //-----------------
    // Delete examples
    //-----------------

/*     cloudinary.api
    .delete_resources(['docs/bridge', 'docs/owl'])
    .then(result=>console.log(result)); */

/*     cloudinary.api
    .delete_resources_by_prefix('docs/')
    .then(result=>console.log(result)); */

/*     cloudinary.api
    .delete_resources_by_prefix('docs/', {resource_type: 'video', type: 'authenticated'})
    .then(result=>console.log(result)); */
    
/*     cloudinary.api
    .delete_resources_by_prefix('docs/', {type: 'authenticated'})
    .then(result=>console.log(result)); */

    // Fetch a Facebook image
    // https://res.cloudinary.com/ddo3qntkn/image/facebook/65646572251.jpg

/*     cloudinary.api
    .delete_all_resources(
    {type: 'facebook'})
    .then(result=>console.log(result)); */

/*     cloudinary.api
    .delete_resources_by_tag('mine')
    .then(result=>console.log(result)); */

/*     cloudinary.api
    .delete_resources_by_tag('mine', {resource_type: 'video'})
    .then(result=>console.log(result)); */

/*     cloudinary.api
    .delete_resources_by_tag('mine', {"keep_original": true})
    .then(result=>console.log(result)); */

/*     cloudinary.api
    .resource('docs/owl')
    .then(result=>console.log(result)); */

/*     cloudinary.api
    .delete_derived_resources(['76b6ee3a81e20e110ab81d368d18ff53', '349bfe6c9813708c5398f5cadf391a7d'])
    .then(result=>console.log(result));  */

/*     cloudinary.api
    .resource('docs/owl')
    .then(result=>console.log(result)); */


})();