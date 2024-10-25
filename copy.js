const selectColor_1=document.querySelector('.svg-1')
const selectColor_2=document.querySelector('.svg-2')
const selectColor_3=document.querySelector('.svg-3')
const colorChooser_1=document.querySelector('#colorPicker-1')
const colorChooser_2=document.querySelector('#colorPicker-2')
const colorChooser_3=document.querySelector('#colorPicker-3')



colorChooser_1.addEventListener('input', (event) => {
    const selectC = event.target.value;
    selectColor_1.style.fill = selectC;
});

colorChooser_2.addEventListener('input', (event) => {
    const selectC = event.target.value;
    selectColor_2.style.fill = selectC;
});

colorChooser_3.addEventListener('input', (event) => {
    const selectC = event.target.value;
    selectColor_3.style.fill = selectC;
});


                    //    الاول  انتهي القسم











                    const upload = document.getElementById('upload');
                    const logo = document.getElementById('logo');
                    const imgContainer = document.querySelector('.img-1'); // الصورة الأساسية
                    const rotateControl = document.getElementById('rotate');
                    const scaleControl = document.getElementById('scale');
                    
                    let isDragging = false;
                    let startX, startY;
                    let currentRotation = 0;
                    let currentScale = 1;
                    
                    // تحميل الشعار
                    upload.addEventListener('change', (e) => {
                        const file = e.target.files[0];
                        const reader = new FileReader();
                        reader.onload = (event) => {
                            logo.src = event.target.result;
                    
                            // ضبط الشعار ليكون في مركز الصورة الأساسية
                            const containerRect = imgContainer.getBoundingClientRect(); // حجم الصورة الأساسية
                            const logoWidth = containerRect.width * 0.2; // حجم الشعار بنسبة 80%
                            const logoHeight = containerRect.height * 0.2;
                    
                            logo.style.width = `${logoWidth}px`;
                            logo.style.height = `${logoHeight}px`;
                            logo.style.left = `${containerRect.width / 6.5}px`; // وضع في المنتصف
                            logo.style.top = `${containerRect.height / 6}px`;
                            logo.style.transform = `translate(-50%, -50%) rotate(0deg) scale(1)`; // توسيط وتحويل
                    
                            currentRotation = 0;
                            currentScale = 1;
                            logo.style.display = 'block'; // إظهار الشعار
                        };
                        reader.readAsDataURL(file);
                    });
                    
                    // سحب الشعار
                    logo.addEventListener('mousedown', (e) => {
                        isDragging = true;
                        startX = e.clientX - logo.offsetLeft;
                        startY = e.clientY - logo.offsetTop;
                    });
                    
                    document.addEventListener('mousemove', (e) => {
                        if (isDragging) {
                            logo.style.left = `${e.clientX - startX}px`;
                            logo.style.top = `${e.clientY - startY}px`;
                        }
                    });
                    
                    document.addEventListener('mouseup', () => {
                        isDragging = false;
                    });
                    
                    // سحب الشعار للأجهزة المحمولة
                    logo.addEventListener('touchstart', (e) => {
                        isDragging = true;
                        const touch = e.touches[0];
                        startX = touch.clientX - logo.offsetLeft;
                        startY = touch.clientY - logo.offsetTop;
                    });
                    
                    document.addEventListener('touchmove', (e) => {
                        if (isDragging) {
                            const touch = e.touches[0];
                            logo.style.left = `${touch.clientX - startX}px`;
                            logo.style.top = `${touch.clientY - startY}px`;
                        }
                    });
                    
                    document.addEventListener('touchend', () => {
                        isDragging = false;
                    });
                    
                    // تدوير الشعار
                    rotateControl.addEventListener('input', (e) => {
                        currentRotation = e.target.value;
                        updateTransform();
                    });
                    
                    // تكبير وتصغير الشعار
                    scaleControl.addEventListener('input', (e) => {
                        currentScale = e.target.value;
                        updateTransform();
                    });
                    
                    // تحديث التحويلات (التدوير والتكبير)
                    function updateTransform() {
                        logo.style.transform = `translate(-50%, -50%) rotate(${currentRotation}deg) scale(${currentScale})`;
                    }
                    











