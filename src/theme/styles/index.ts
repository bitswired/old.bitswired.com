import { mode } from '@chakra-ui/theme-tools';

export default {
  styles: {
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/no-explicit-any
    global: (properties: any) => ({
      '*': {
        // outline: '1px solid red'
        outline: 0
      },
      html: {
        fontSize: { base: '16px', sm: '18px', md: '18px' },
        scrollBehavior: 'initial !important'
      },
      'html, body': {
        fontFamily: 'sans',
        color: mode('gray.800', 'whiteAlpha.900')(properties),
        bg: mode('white', 'gray.800')(properties),
        lineHeight: 'base',
        height: 'auto',
        width: '100vw',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',

        '::-webkit-scrollbar': {
          width: '3px'
        },

        '::-webkit-scrollbar-track': {
          background: '#f1f1f1'
        },

        '::-webkit-scrollbar-thumb': {
          background: '#888'
        },

        '::-webkit-scrollbar-thumb:hover': {
          background: '#555'
        }
      },
      '#prose': {
        fontFamily: 'serif',
        h1: {
          fontFamily: 'sans',
          // fontSize: ['2xl', '5xl'],
          fontSize: ['2.8em', '3.2rem'],
          my: '1em',
          fontWeight: 'bold',
          lineHeight: 1.1
        },
        h2: {
          fontFamily: 'sans',
          // fontSize: ['2xl', '4xl'],
          fontSize: '2.4rem',
          my: '1em',
          fontWeight: 'bold',
          lineHeight: 1.1
        },
        h3: {
          fontFamily: 'sans',
          // fontSize: ['xl', '2xl'],
          fontSize: '1.8rem',
          my: '0.7em',
          fontWeight: 'bold',
          lineHeight: 1.1
        },
        h4: {
          fontFamily: 'sans',
          // fontSize: ['lg', 'xl'],
          fontSize: '1.4rem',
          my: '0.5m',
          fontWeight: 'bold',
          lineHeight: 1.1
        },
        p: {
          lineHeight: '1.7',
          my: '1em',
          color: '#272727',
          fontSize: '1em'
          // fontWeight: '300'
        },
        ul: {
          listStylePosition: 'inside',
          ml: '1em'
        },
        ol: {
          listStylePosition: 'inside',
          ml: '1em'
        },
        li: {
          my: '0.5em'
        },
        blockquote: {
          fontFamily: 'serif',
          background: '#f9f9f9',
          borderLeft: '10px solid',
          borderColor: 'secondary',
          margin: '1.5em 10px',
          padding: '0.5em 10px',
          quotes: "'\\201C' '\\201D'",
          _before: {
            color: 'secondary',
            content: 'open-quote',
            fontSize: '4em',
            lineHeight: '0.1em',
            marginRight: '0.25em',
            verticalAlign: '-0.4em'
          },
          p: {
            display: 'inline'
          }
        },
        figure: {
          textAlign: 'center',
          fontStyle: 'italic'
        }
      }
    })
  }
};
