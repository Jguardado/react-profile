export const getBlogSummaries = res => res.map(blog => blog.blogSummary);

export const getBlogImages = res => res.map(blog => blog.image);
// handlefetch(dispatch, '/blog-images', receivedBlogImages, 'blogImages');

export const getMiniBlogImages = res => res.map(blog => blog.miniImage);
// handlefetch(dispatch, '/blog-mini-images', receivedBlogMiniImages, 'blogMiniImages');
