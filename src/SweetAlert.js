
import Swal from 'sweetalert2'; 
import './App.css';

function SweetAlert() {
          Swal.fire({
          icon: 'error',
          title: 'Oops...looks like the dates are off',
          text: 'You are either entered wrong EDD or you are past due',
        })
      }
export default SweetAlert;