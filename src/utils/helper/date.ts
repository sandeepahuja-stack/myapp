function dateWithoutTime (date: string){
    const nowDate = new Date(date); 
    return nowDate.getFullYear()+'/'+(nowDate.getMonth()+1)+'/'+nowDate.getDate(); 
}

export default  dateWithoutTime;
