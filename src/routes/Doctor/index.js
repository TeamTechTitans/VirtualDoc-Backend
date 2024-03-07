const express = require('express')
const { createDoctors } = require('../../api/v1/doctors/createDoctors')

const { doctorRole } = require('../../api/v1/doctors/doctorRole')
const { getIndividualDoctor } = require('../../api/v1/doctors/getIndivitualDoctor')
const { updateDoctor } = require('../../api/v1/doctors/updateDoctor')
const { getDoctors } = require('../../api/v1/doctors/getDoctors')
const { getDoctorsCategory } = require('../../api/v1/doctors/getDoctorsCategory')
const { getDoctorAppointment } = require('../../api/v1/appointment/getDoctorAppointment')
const { deleteDoctor } = require('../../api/v1/doctors/deleteDoctor')
const { getDoctorStats } = require('../../api/v1/doctors/getDoctorStats')
const { getDoctorDetails } = require('../../api/v1/doctors/getDoctorDetails')
const router = express.Router()

router.get('/doctors',getDoctors)
router.get('/doctorsHealthCategory',getDoctorsCategory)
router.post('/doctors/createDoctors',createDoctors)
router.get("/doctors/:email" , doctorRole)
router.get("/doctor/:email" , getIndividualDoctor)
router.get("/doctorDetails/:id" , getDoctorDetails)
router.get("/doctorsHealthCategory" , getDoctorsCategory)
router.put('/doctor/:email',updateDoctor)
router.get('/doctorAppointment/:email',getDoctorAppointment)
router.delete("/doctor/:id", deleteDoctor)
router.get('/doctor/stats/:email', getDoctorStats)

module.exports = router