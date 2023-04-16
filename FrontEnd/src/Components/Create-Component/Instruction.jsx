import React from "react";
import Swal from "sweetalert2";
function openInstruction()
{
    Swal.fire({
        title: "Instruction!",
        icon: "info",
      });
}
function closeInstruction()
{
   
}
function Instruction()
{
    return <div className="hold-create">
    <button className="btn btn-danger instruction"  onClick={openInstruction}>Instruction</button>
    </div>
}

export default Instruction;