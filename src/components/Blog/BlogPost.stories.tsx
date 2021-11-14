//@ts-ignore
// import MDX from '@mdx-js/runtime';
import { Story } from '@storybook/react';

// import { mdxComponents } from 'components/MDX';
import BlogPost, { BlogPostProps } from './BlogPost';

export default {
  title: 'Blog/BlogPost',
  component: BlogPost
};

const Template: Story<BlogPostProps> = (arguments_) => <BlogPost {...arguments_} />;

// const mdx = `
// # Hello, world!

// Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quam risus, luctus vitae tempus in, varius a elit. Nullam sit amet lacus id orci dictum mollis. Nulla sed porttitor ante, eu volutpat ligula. Aliquam laoreet consequat placerat. Curabitur maximus tristique placerat. Maecenas sed lectus elementum, accumsan odio id, aliquet augue. Nam posuere varius mi, nec efficitur nisl. Duis sollicitudin varius viverra. Donec tincidunt leo at malesuada finibus.

// Curabitur libero dui, posuere ut lorem in, dictum faucibus magna. Nunc a vehicula felis. Donec iaculis lorem eget dignissim feugiat. Pellentesque ullamcorper convallis consectetur. Phasellus placerat, dui ut rhoncus elementum, ante eros convallis metus, blandit fermentum purus ex nec dui. Duis rhoncus gravida erat ut viverra. Curabitur urna mi, vestibulum non lacus et, fermentum tempor risus. Pellentesque in augue quam.

// <Figure ratio={16 / 9} src="https://wallpapercave.com/wp/wp4676582.jpg" alt="image" title="Title" />

// ## Test 2

// Quisque eu vehicula quam, et laoreet tortor. Sed tempus, nisl nec tempus pretium, purus nunc rutrum elit, a porta tortor nibh sed lorem. Nullam lacinia id risus id porttitor. Nam vulputate at ligula a elementum. Donec lobortis felis vitae porta viverra. In et purus ultrices, ultrices massa eget, gravida turpis. Praesent hendrerit dignissim leo, in ultrices elit. Proin dignissim, lacus vitae auctor mollis, leo mauris feugiat enim, at congue leo mauris at lorem. Proin ullamcorper dolor sed arcu vehicula, ac dapibus justo dapibus.

// # Testar

// Curabitur libero dui, posuere ut lorem in, dictum faucibus magna. Nunc a vehicula felis. Donec iaculis lorem eget dignissim feugiat. Pellentesque ullamcorper convallis consectetur. Phasellus placerat, dui ut rhoncus elementum, ante eros convallis metus, blandit fermentum purus ex nec dui. Duis rhoncus gravida erat ut viverra. Curabitur urna mi, vestibulum non lacus et, fermentum tempor risus. Pellentesque in augue quam.

// ## Test 3

// Quisque eu vehicula quam, et laoreet tortor. Sed tempus, nisl nec tempus pretium, purus nunc rutrum elit, a porta tortor nibh sed lorem. Nullam lacinia id risus id porttitor. Nam vulputate at ligula a elementum. Donec lobortis felis vitae porta viverra. In et purus ultrices, ultrices massa eget, gravida turpis. Praesent hendrerit dignissim leo, in ultrices elit. Proin dignissim, lacus vitae auctor mollis, leo mauris feugiat enim, at congue leo mauris at lorem. Proin ullamcorper dolor sed arcu vehicula, ac dapibus justo dapibus.

// \`\`\`tsx
// class CommentList extends React.Component<CommentData, Nothing> {
//   render() {
//     const nodes = this.props.data.map(comment => <Commentt author={comment.author}>{comment.text}</Commentt>)
//     return (
//       <div className="commentList">
//         {nodes}
//       </div>
//     );
//   }
// };
// \`\`\`

// # Testar

// Curabitur libero dui, posuere ut lorem in, dictum faucibus magna. Nunc a vehicula felis. Donec iaculis lorem eget dignissim feugiat. Pellentesque ullamcorper convallis consectetur. Phasellus placerat, dui ut rhoncus elementum, ante eros convallis metus, blandit fermentum purus ex nec dui. Duis rhoncus gravida erat ut viverra. Curabitur urna mi, vestibulum non lacus et, fermentum tempor risus. Pellentesque in augue quam.

// `;

export const Default = Template.bind({});
Default.args = {
  meta: {
    title: 'Test Article',
    description: '',
    readMinutes: 10,
    image: 'https://wallpaper.dog/large/526372.jpg',
    tags: ['Typesript', 'React'],
    category: 'Programming',
    slug: 'tt-tt',
    published: true,
    datePublished: '2020-01-01',
    dateModified: '2020-01-01',
    images: ['test']
  }
  // mdxRendered: <MDX components={mdxComponents}>{mdx}</MDX>
};
