import React from 'react'

function Forms({handleChange, username, inputplasholder,inputtype, getOtpBtn}) {
    return (
        <>
        <form class="row row-gap-4">
            <div class="col-12">
                <label for="number" class="form-label fs-16">{username}</label>
                <input type={inputtype} class="form-control shadow-none  p-3 fs-16" id="number" placeholder={inputplasholder}/>
            </div>
            <div class="col-12 text-center">
                <button type="button" class="btn btn-theme1 w-100 p-3 fs-16" onClick={handleChange}>{getOtpBtn}</button>
            </div>
        </form>
        </>
    )
}

export default Forms