const getImageUrl = (imageFile) => {
  console.log(`http://localhost:5000${imageFile}`);
  return `http://localhost:5000${imageFile}`;
}

module.exports = {
  getImageUrl
};
