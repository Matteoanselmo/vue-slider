const app = new Vue({
    el: '#app',
    data : {
        elementActive : 0,
        myArray : [
            {
                image : 'img/img1.jpg',
                titolo : 'Random',
                paragrafo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id quas cupiditate possimus eos ullam beatae nemo reprehenderit? Iusto blanditiis laboriosam nulla'
            },
            {
                image : 'img/img2.jpg',
                titolo : 'Randomissimo',
                paragrafo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id quas cupiditate possimus eos ullam beatae nemo reprehenderit? Iusto blanditiis laboriosam nulla'
            },
            {
                image : 'img/img3.jpg',
                titolo : 'Grazie',
                paragrafo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id quas cupiditate possimus eos ullam beatae nemo reprehenderit? Iusto blanditiis laboriosam nulla'
            },
            {
                image : 'img/img4.jpg',
                titolo : 'Graziella',
                paragrafo : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat id quas cupiditate possimus eos ullam beatae nemo reprehenderit? Iusto blanditiis laboriosam nulla'
            },
        ],
    },
    methods: {
        previusSlide(){
            if ( this.elementActive === 0 ){
                this.elementActive = ( this.myArray.length - 1 );
            } else {
                this.elementActive--;
            }
        },

        nextSlide(){
            if ( this.elementActive === ( this.myArray.length - 1 ) ){
                this.elementActive = 0;
            } else {
                this.elementActive++;
            }
        }
    }
});
