import Swal from 'sweetalert2'; 

function SweetAlert() {
          Swal.fire({
          icon: 'error',
          title: `Oops...looks like you've either entered wrong EDD or you are past due`,
          text: `If you are past 41 weeks, your healthcare provider may recommend inducing labor. Or they may recommend weekly or twice-weekly visits and testing to make sure your baby is still thriving. `
        })
      }
export default SweetAlert;