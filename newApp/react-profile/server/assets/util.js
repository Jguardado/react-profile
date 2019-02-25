const pathForPic = (location) => {
  return `http://localhost:5000/${location}`;
}

const getImageFile = (imageType, size) => {
  switch (imageType) {
    case 'SF_PIC':
      return pathForPic('san-fran.jpg');
    case 'LA_PIC':
      return pathForPic('la-street.jpg');
    case 'RAILROAD_PIC':
      return pathForPic('railroad.jpg');
    case 'SOMEWHERE_PIC':
      return pathForPic('somewhere.jpg');
    default:
      return ''
  }
}

module.exports = {
  getImageFile
};
