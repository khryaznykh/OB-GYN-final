import Swal from 'sweetalert2'; 

function SweetAlertCongrats () {
    Swal.fire({
        title: "Congratulations",
        text: 'Your due date is today! This means that your baby is coming any time!',
        width: 500,
        padding: "5em",
        color: "#716add",
        background: "#fff url()",
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://orig00.deviantart.net/d78d/f/2015/242/3/3/estrellas_animadas_by_spiritmoni-d97pqri.png")
          center top
          repeat
        `,
        confirmButtonText: `Congrats`,
      });
}
export default SweetAlertCongrats;



