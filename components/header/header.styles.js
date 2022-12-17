export default theme => ({
  toolbar: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: '60px',
    px: 5,
    [theme.breakpoints.up('md')]: {
      px: 10,
    },
  },
  iconContainer: {
    cursor: 'pointer',
  },
});
