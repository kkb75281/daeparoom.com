<template>
    <div>
        <div v-for="(image, index) in images" :key="index">
            <div class="frame" :style="{ backgroundColor: image.frame.color }">
                <img :src="image.src" alt="">
            </div>
            <button @click="deleteImage(index)">Delete</button>
        </div>
        <button @click="addImage">Add Image</button>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            images: [],
            frames: [
                { id: 1, color: '#ff0000' },
                { id: 2, color: '#00ff00' },
                { id: 3, color: '#0000ff' }
            ]
        };
    },
    methods: {
        addImage() {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.onchange = () => {
                const file = fileInput.files[0];
                const reader = new FileReader();
                reader.onload = (e) => {
                    const newImage = { id: this.images.length + 1, src: e.target.result };
                    const newFrame = this.frames[Math.floor(Math.random() * this.frames.length)];
                    const imageWithFrame = { ...newImage, frame: newFrame };
                    this.images.push(imageWithFrame);
                };
                reader.readAsDataURL(file);
            };
            fileInput.click();
        },
        deleteImage(index) {
            this.images.splice(index, 1);
        }
    }
};
</script>
  
<style>
.frame {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 200px;
    margin: 10px;
    border: 2px solid #000000;
}
</style>
  