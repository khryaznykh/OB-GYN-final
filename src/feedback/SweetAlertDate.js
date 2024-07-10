import Swal from 'sweetalert2'; 

function SweetAlertDate() {
    Swal.fire({
        title: "Oops....",
        text: "Please enter your due date",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image"
      });
  }
export default SweetAlertDate;