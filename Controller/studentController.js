const Student = require('../models/student');

// CREATE a new student
exports.createStudent = async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();
        res.status(201).send({ message: 'Student created successfully!', student });
    } catch (error) {
        res.status(400).send({ message: 'Error creating student', error: error.message });
    }
};

// READ all students
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find({});
        res.status(200).send(students);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching students', error: error.message });
    }
};

// UPDATE a student by ID
exports.updateStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!student) {
            return res.status(404).send({ message: 'Student not found' });
        }
        res.status(200).send({ message: 'Student updated successfully!', student });
    } catch (error) {
        res.status(400).send({ message: 'Error updating student', error: error.message });
    }
};

// DELETE a student by ID
exports.deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).send({ message: 'Student not found' });
        }
        res.status(200).send({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).send({ message: 'Error deleting student', error: error.message });
    }
};
