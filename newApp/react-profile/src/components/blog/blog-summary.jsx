import React, { PropTypes } from 'react';

const BlogSummary = ({ summaries, summaryIndex }) => (
  <div className="blog_entry_summary">
    {
      summaries ? summaries[summaryIndex] : null// TODO: This is throwing an error of being undefined
    }
  </div>
);


BlogSummary.defaultProps = {
  summaries: [],
  summaryIndex: 0,
};

BlogSummary.propTypes = {
  summaries: PropTypes.array,
  summaryIndex: PropTypes.number,
};


export default BlogSummary;
