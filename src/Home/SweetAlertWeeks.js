import Swal from 'sweetalert2'; 
function SweetAlertWeeks ({days}) {
    Swal.fire({
        title: "You're gonna meet your baby soon!",
        text: `There is ${days} days until your due date`,
        imageUrl: "https://images.unsplash.com/photo-1438962136829-452260720431?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
        confirmButtonText: "Got it!"
      })
}

export default SweetAlertWeeks;