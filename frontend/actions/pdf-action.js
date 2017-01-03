import $ from "jquery";

const getPdf = currentPdf => ({
  type: "GET_PDF",
  data: currentPdf,
})

const serverGetPdf = () => dispatch => {
  $.ajax({
    url: '/api/upload/',
    type: 'GET'
  })
  .done(data => {
    dispatch(getPdf(data));
  })
  // returning a promise so .then can be called if needed
  return Promise.resolve();
}

const postPDF = (data) => dispatch => {
  // var formData = new FormData();
  // console.log(data.file)
  // formData.append('title', data.title);
  // formData.append('file', data.file, data.file.name);
  console.log(data)
  $.ajax({
    url: '/api/upload/',
    type: 'POST',
    cache: false,
    contentType: false,
    processData: false,
    data: data,
  })
  .done(data => {
    dispatch(serverGetPdf(data));
  })
  // returning a promise so .then can be called if needed
  return Promise.resolve();
}

export default  {
	serverGetPdf,
	postPDF,
}