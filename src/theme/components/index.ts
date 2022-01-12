export default {
  Button: {
    baseStyle: {
      justify: 'center',
      align: 'center',
      fontWeight: 'bold',
      alignItems: 'center'
    },

    sizes: {
      sm: {
        fontSize: 'sm',
        padding: 2
      },
      md: {
        fontSize: 'md',
        padding: 3
      },
      lg: {
        fontSize: 'lg',
        padding: 4
      }
    },

    variants: {
      'primary-solid': {
        color: 'white',
        bg: 'primary1',
        textTransform: 'uppercase'
      },
      'secondary-solid': {
        color: 'white',
        bg: 'secondary1',
        textTransform: 'uppercase',
        _hover: {
          filter: 'brightness(0.5)'
        }
      },
      'primary-outline': {
        color: 'primary1',
        borderColor: 'primary1',
        borderWidth: '2px',
        textTransform: 'uppercase'
      },
      'secondary-outline': {
        color: 'secondary1',
        borderColor: 'secondary1',
        borderWidth: '2px',
        textTransform: 'uppercase'
      },
      'primary-link': {
        textTransform: 'capitalize',
        color: 'primary1',
        _hover: {
          bgColor: 'gray.200'
        }
      },
      'secondary-link': {
        textTransform: 'capitalize',
        color: 'secondary1',
        _hover: {
          bgColor: 'gray.200'
        }
      }
    },

    defaultProps: {
      size: 'md',
      variant: 'primary-solid'
    }
  },

  Tag: {
    baseStyle: {
      display: 'none',
      fontWeight: 'bold',
      verticalAlign: 'baseline',
      alignItems: 'start',
      alignContent: 'start'
    }
  },

  HomeHeadline: {
    baseStyle: {
      color: 'white'
    },
    sizes: {
      sm: {
        fontSize: 'xl',
        textAlign: 'center'
      },
      md: {
        fontSize: '2xl',
        textAlign: 'right'
      },
      lg: {
        fontSize: '4xl',
        textAlign: 'right'
      }
    }
  },

  HomeSubline: {
    baseStyle: {
      color: 'white'
    },
    sizes: {
      sm: {
        fontSize: 'lg',
        textAlign: 'center'
      },
      md: {
        fontSize: 'xl',
        textAlign: 'right'
      },
      lg: {
        fontSize: '2xl',
        textAlign: 'right'
      }
    }
  },

  FeatureCard: {
    parts: ['card', 'title', 'body', 'footer'],

    baseStyle: {
      card: {
        textAlign: 'center',
        margin: 'auto',
        p: 8
      },

      title: {
        fontWeight: 'bolder',
        fontSize: '2xl'
      },

      body: {
        fontSize: '100px',
        color: 'primary1',
        width: 'max-content',
        margin: 'auto',
        p: 4
      },

      footer: {
        margin: 'auto',
        fontSize: 'lg',
        maxWidth: '400px'
      }
    }
  }
};
