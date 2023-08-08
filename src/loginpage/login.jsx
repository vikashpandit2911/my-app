import { useFormik } from "formik";

export function FormikDemo()
{

    function ValidateUserDetails(formBody){
        var errors = {};

        if(formBody.UserName==""){
            errors.UserName = "User Name Required";
        } else {
            if(formBody.UserName.length<4){
                errors.UserName = "Name too short min 4 chars";
            } else {
                errors.UserName = "";
            }
        }

        if(isNaN(formBody.Age)){
            errors.Age = "Age must be a number";
        } else {
            errors.Age = "";
        }

        if(formBody.Mobile.match(/\+91\d{10}/)){
            errors.Mobile = "";
        } else {
            errors.Mobile = "Invalid Mobile";
        }

        if(formBody.City=="-1"){
            errors.City = "Please choose a city";
        } else {
            errors.City = "";
        }

        return errors;
    }

    const formik = useFormik({
        initialValues : {
            "UserName": "",
            "Age": 0,
            "Mobile": "",
            "City": ""
        },
        onSubmit : (values) => {
            alert(JSON.stringify(values));
        },
        validate : ValidateUserDetails
    })
    return(
        <div className="container-fluid">
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="UserName" /></dd>
                    <dd className="text-danger">{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Age"/></dd>
                    <dd className="text-danger">{formik.errors.Age}</dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" onChange={formik.handleChange} name="Mobile"/></dd>
                    <dd className="text-danger">{formik.errors.Mobile}</dd>
                    <dt>City</dt>
                    <dd>
                        <select name="City" onChange={formik.handleChange}>
                            <option value="-1">Choose City</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Hyd">Hyd</option>
                        </select>
                    </dd>
                    <dd className="text-danger">{formik.errors.City}</dd>
                </dl>
                <button className="btn btn-primary">Register</button>
            </form>
        </div>
    )
}
