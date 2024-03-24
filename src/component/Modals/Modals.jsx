import React from 'react'
import { Modal, Button } from "react-bootstrap";

function Modals({ show, handleClose,handleChangeModal, modalBodyPart , handleChange, modalHeading, modalCloseBtn, modalSubmitBtn, modalChangeHeading, modalFooter }) {
    return (
        <>
            <Modal className='form loginmodal' show={show} onHide={handleClose} backdrop="static" keyboard={false} aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header className='px-4' closeButton>
                    <Modal.Title className='fs-5'>{modalHeading}</Modal.Title>
                </Modal.Header>
                <Modal.Body className='px-4'>
                    {modalBodyPart}
                </Modal.Body>
                <Modal.Footer className={`px-4 justify-content-between ${modalFooter ? 'd-none': 'd-flex'}`}>
                    <div class="fs-16">{modalChangeHeading}</div>
                    <Button className='fs-16 text-theme2 text-decoration-none border-0 bg-transparent p-0 m-0 h-auto ' type="button" onClick={handleChangeModal}>{modalCloseBtn}</Button>
                    {/* <Button variant="primary" onClick={handleChange} >{modalSubmitBtn}</Button> */}
                </Modal.Footer>
            </Modal>


            {/* <div class="modal form fade loginmodal" id="login" aria-hidden="true" aria-labelledby="loginLabel" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-header px-4">
                    <h1 class="modal-title fs-5" id="loginLabel">Log in to your PFW Account</h1>
                    <button type="button" class="btn-close btn-close-white shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body p-4">
                    <form class="row row-gap-4">
                        <div class="col-12">
                            <label for="number" class="form-label fs-16">Enter your mobile number </label>
                            <input type="tel" class="form-control shadow-none  p-3 fs-16" id="number" placeholder="PFW ragister mobile number"/>
                        </div>
                        <div class="col-12 text-center">
                            <button type="button" class="btn btn-theme1 w-100 p-3 fs-16" data-bs-target="#otp2" data-bs-toggle="modal">GET OTP</button>
                        </div>
                    </form>
                    </div>
                    <div class="modal-footer px-4 justify-content-between">
                        <div class="fs-16">Don’t have a PFW account?</div>
                        <a href="javascript:;" class="fs-16 text-theme2  text-decoration-none" type="button" data-bs-target="#login2" data-bs-toggle="modal">Ragister</a>
                    </div>
                </div>
                </div>
            </div> */}
        </>
    )
}

export default Modals