<template>
<div>
    <div>
        <b-button v-b-modal.modal-1>Student</b-button>

        <b-modal id="modal-1" title="Add new Student" hide-footer>
            <div class="form-row mt-3 px-5">
                <div class="form-group my-2">
                    <label>Date</label>
                    <b-form-input type="date" class="form-control"></b-form-input>
                </div>
            </div>
            <div class="form-row mt-3 px-5">
                <div class="form-group my-2">
                    <label>Name</label>
                    <b-form-input type="text" class="form-control" placeholder="Enter student name"></b-form-input>
                </div>
            </div>
            <div class="form-row mt-3 px-5">
                <div class="form-group my-2">
                    <label>Contact</label>
                    <b-form-input type="number" class="form-control" placeholder="Enter contact number"></b-form-input>
                </div>
            </div>
            <div class="form-row mt-3 px-5">
                <div class="form-group my-2">
                    <label>Age</label>
                    <b-form-input type="number" class="form-control" placeholder="Enter student age"></b-form-input>
                </div>
            </div>
            <div class="form-row mt-3 px-5">
                <div class="form-group my-2">
                    <label>Qualification</label>
                    <b-form-input type="text" class="form-control" placeholder="Enter student qualification"></b-form-input>
                </div>
            </div>
            <div class="form-row mt-3 px-5">
                <div class="form-group my-2">
                    <label>Course</label>
                    <b-form-input type="text" class="form-control" placeholder="Enter your name"></b-form-input>
                </div>
            </div>
            <div class="form-row mt-3 px-5">
                <div class="form-group my-2">
                    <label>Source</label>
                    <b-form-input type="text" class="form-control" placeholder="Enter your name"></b-form-input>
                </div>
            </div>
            <div class="form-row mt-3 px-5">
                <div class="form-group my-2">
                    <label>Online / Offline</label>
                    <b-form-input type="text" class="form-control" placeholder="Enter your name"></b-form-input>
                </div>
            </div>
            <div class="form-row mt-3 px-5">
                <div class="form-group my-2">
                    <label>Branch</label>
                    <b-form-input type="text" class="form-control" placeholder="Enter your name"></b-form-input>
                </div>
            </div>
            <div class="form-row mt-3 px-5">
                <div class="form-group my-2">
                    <label>No.of feedbacks</label>
                    <b-form-textarea
                    id="textarea"
                    placeholder="Date mandatory"
                    rows="4"
                    max-rows="6"
                    ></b-form-textarea>
                </div>
            </div>
            <div class="text-center mt-3 mt-2">
                <b-button type="submit" class="px-3" variant="primary">register</b-button>
            </div>
        </b-modal>
    </div>
</div>
</template>

<script>
export default {
    name: 'Project',

}
</script>