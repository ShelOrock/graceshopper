export const convertDate = date => {

  const monthData = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec'
  ];
  
  const trimDate = date => {
    if(date[0] === '0') {
      return date.slice(1);
    };
    return date;
  };
  
  const convertMonth = month => {
    return monthData[Number(month) - 1]
  };
  
  const removeTime = date.split(' ');
  const splitDate = removeTime[0].split('/');
  
  return `${ convertMonth(trimDate(splitDate[0] )) }, ${ trimDate(splitDate[1]) } ${ splitDate[2] }`;
};
