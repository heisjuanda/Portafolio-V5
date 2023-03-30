import '../styles/styles.css';
//import styles from '../styles/styles.css';

//Convertir lista de letras en span
const effect = (id, classN) => {
    const e = document.getElementById(id),
        text = e.innerText.split('')
    e.innerText = ''
    text.forEach(letter => {
        const span = document.createElement('span')
        span.className = classN
        span.innerText = letter
        e.appendChild(span)
    })
}

const createWork = (titleS, techS, counterS, classNameProjectS, link) => {
    const workSection = document.querySelector('.work__section--content')
    const project = document.createElement('div')
    project.className = classNameProjectS
    const number = document.createElement('div')
    number.className = 'project__number'
    const number_counter = document.createElement('h3')
    number_counter.innerText = counterS
    const title = document.createElement('div')
    title.className = 'project__title'
    const title_project = document.createElement('h2')
    title_project.innerText = titleS
    const tools = document.createElement('div')
    tools.className = 'project__tools'
    const tools_name = document.createElement('p')
    tools_name.innerText = techS
    const projectLink = document.createElement('a')
    projectLink.className = 'link-project'
    projectLink.href = link
    projectLink.target = '_blank'

    workSection.appendChild(project)
    project.appendChild(projectLink)
    number.appendChild(number_counter)
    title.appendChild(title_project)
    tools.appendChild(tools_name)
    projectLink.appendChild(number)
    projectLink.appendChild(title)
    projectLink.appendChild(tools)
}

window.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader')
    effect('loadingLoader1', 'letterLoader')
    effect('loadingLoader2', 'letterLoader')
    effect('loadingLoader3', 'letterLoader')
    effect('loadingLoader4', 'letterLoader')
    effect('loadingLoader5', 'letterLoader')
    effect('loadingLoader6', 'letterLoader')
    effect('loadingLoader7', 'letterLoader')
    effect('loadingLoader8', 'letterLoader')
    effect('loadingLoader9', 'letterLoader')
    document.querySelectorAll('.letterLoader').forEach((el, id) => {
        el.style.animation = `identifier 4s ease-in-out ${id * 0.1}s forwards`
    })
    create();
    setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }, 6000)
})
//Cargar elementos
const create = () => {
    //variables
    const circle = document.getElementById('trailer')
    const sectionTransition1 = document.querySelector('.sectionTransition1')
    const sectionTransition2 = document.querySelector('.sectionTransition2')
    const sectionTransition3 = document.querySelector('.sectionTransition3')
    const animationTransitionHelper = document.querySelector('.dots')
    const shootDot = document.getElementById('dotSend')
    const aboutSection = document.querySelector('.about__section')
    const dot = document.querySelector('.dot')
    const contact = document.getElementById('contact')
    const contactSection = document.querySelector('.contact__section')
    const goBack = document.getElementById('goBack')
    let timeOut
    const messageForm = document.getElementById('messageForm')
    const workSection = document.getElementById('workSection')

    //Menu Mobile
    effect('aboutMenuM', 'letter--menu__about')
    effect('workMenuM', 'letter--menu__work')
    effect('contactMenuM', 'letter--menu__contact')
    const menuMobileIds = [aboutMenuM, workMenuM, contactMenuM]
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.menu');
    const dotMenu = document.querySelector('.menu-dot');
    const aboutLetters = document.querySelectorAll('.letter--menu__about')
    const workLetters = document.querySelectorAll('.letter--menu__work')
    const contactLetters = document.querySelectorAll('.letter--menu__contact')
    const menuOptions = document.querySelector('.menu-options')
    let isClose = true

    menuOptions.style.width = '0%'
    menuMobileIds.forEach(id => {
        id.addEventListener('click', () => {
            menuBtn.classList.toggle('open');
            menu.classList.toggle('open');
            if (!isClose) {
                dotMenu.style.transform = 'translate(50%, -50%) scale3d(0,0,0)'
                //dotMenu.style.webkitTransform = 'translate(50%, -50%) scale(0)'
                aboutLetters.forEach((el, id) => {
                    if (id !== 3 && id !== 6) {
                        el.style.transform = 'translateY(8vw) rotateZ(30deg)'
                        //el.style.webkitTransform = 'translateY(8vw) rotateZ(30deg)'
                        el.style.opacity = '0'
                    }
                })
                workLetters.forEach(el => {
                    el.style.transform = 'translateY(8vw) rotateZ(30deg)'
                    //el.style.webkitTransform = 'translateY(8vw) rotateZ(30deg)'
                    el.style.opacity = '0'
                })
                contactLetters.forEach((el, id) => {
                    if (id !== 5) {
                        el.style.transform = 'translateY(8vw) rotateZ(30deg)'
                        //el.style.webkitTransform = 'translateY(8vw) rotateZ(30deg)'
                        el.style.opacity = '0'
                    }
                })
                setTimeout(() => {
                    menuOptions.style.width = '0%'
                }, 500)
            }
            isClose = !isClose
        })
    })
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('open');
        menu.classList.toggle('open');
        if (isClose) {
            dotMenu.style.transform = 'translate(50%, -50%) scale3d(1,1,1)'
            //dotMenu.style.webkitTransform = 'translate(50%, -50%) scale(1)'
            menuOptions.style.width = '90%'
            aboutLetters.forEach((el, id) => {
                if (id !== 3 && id !== 6) {
                    el.style.transform = 'translateY(0vw) rotateZ(0deg)'
                    //el.style.webkitTransform = 'translateY(0vw) rotateZ(0deg)'
                    el.style.opacity = '1'
                }
            })
            workLetters.forEach(el => {
                el.style.transform = 'translateY(0vw) rotateZ(0deg)'
                //el.style.webkitTransform = 'translateY(0vw) rotateZ(0deg)'
                el.style.opacity = '1'
            })
            contactLetters.forEach((el, id) => {
                if (id !== 5) {
                    el.style.transform = 'translateY(0vw) rotateZ(0deg)'
                    //el.style.webkitTransform = 'translateY(0vw) rotateZ(0deg)'
                    el.style.opacity = '1'
                }
            })
        } else {
            dotMenu.style.transform = 'translate(50%, -50%) scale3d(0,0,0)'
            //dotMenu.style.webkitTransform = 'translate(50%, -50%) scale(0)'
            aboutLetters.forEach((el, id) => {
                if (id !== 3 && id !== 6) {
                    el.style.transform = 'translateY(8vw) rotateZ(30deg)'
                    //el.style.webkitTransform = 'translateY(8vw) rotateZ(30deg)'
                    el.style.opacity = '0'
                }
            })
            workLetters.forEach(el => {
                el.style.transform = 'translateY(8vw) rotateZ(30deg)'
                //el.style.webkitTransform = 'translateY(8vw) rotateZ(30deg)'
                el.style.opacity = '0'
            })
            contactLetters.forEach((el, id) => {
                if (id !== 5) {
                    el.style.transform = 'translateY(8vw) rotateZ(30deg)'
                    //el.style.webkitTransform = 'translateY(8vw) rotateZ(30deg)'
                    el.style.opacity = '0'
                }
            })
            setTimeout(() => {
                menuOptions.style.width = '0%'
            }, 500)
        }
        isClose = !isClose
    });

    //form
    effect('Sent', 'sent')
    effect('notSent', 'notsent')
    let form = document.getElementById('sendEmailForm')
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        shootDot.style.animation = 'scalingStay 1.3s ease-in-out'
        shootDot.style.animationFillMode = 'forwards'
        setTimeout(() => {
            shootDot.style.animation = ''
        }, 1300)

        const name = document.getElementById('namef').value;
        const email = document.getElementById('emailf').value;
        const message = document.getElementById('messagef').value;
        const apiKey = 'Your ApiKey Here'

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'ApiKey Here', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('api-key', apiKey);

        setTimeout(() => {
            messageForm.style.display = 'block'
        }, 500)

        xhr.onload = () => {
            if (xhr.status === 201) {
                document.querySelectorAll('.sent').forEach((el, id) => {
                    if (id !== 4) {
                        el.style.animation = 'showMessageForm 3s ease-in forwards'
                    }
                })
                setTimeout(() => {
                    shootDot.style.animation = 'scalingStay 1.5s ease-in-out reverse forwards'
                    messageForm.style.display = 'none'
                    setTimeout(() => {
                        shootDot.style.animation = ''
                    }, 1500)
                }, 3000)
                form.reset();
            } else {
                document.querySelectorAll('.notsent').forEach((el, id) => {
                    if (id !== 6 && id !== 9) {
                        el.style.animation = 'showMessageForm 3s ease-in forwards'
                    }
                })
                setTimeout(() => {
                    shootDot.style.animation = 'scalingStay 1.5s ease-in-out reverse forwards'
                    messageForm.style.display = 'none'
                    setTimeout(() => {
                        shootDot.style.animation = ''
                    }, 1500)
                }, 3000)
            }
        };

        const data = JSON.stringify({
            sender: {
                name: name,
                email: email,
            },
            to: [
                {
                    email: 'heisjuanda@gmail.com',
                },
            ],
            subject: 'Portafolio Formulario',
            htmlContent: message,
        });

        xhr.send(data);
    });

    //Manipulación del DOM

    createWork('PROGRAM LANGUAGE', 'Scheme - DRacket', '00', 'interactable work-content__project-one', 'https://github.com/heisjuanda/Program-language')
    createWork('CALCULATOR', 'HTML - Sass - TypeScript - Angular', '01', 'interactable work-content__project-two', 'https://github.com/heisjuanda/componentCalculator')
    createWork('NEWTON RAPHSON', 'HTML - Sass - TypeScript - Angular', '02', 'interactable work-content__project-three', 'https://github.com/heisjuanda/NewtonRaphsonMethod')
    createWork('ALGORITHMS SORTING', 'HTML - Sass - TypeScript - Angular', '03', 'interactable work-content__project-four', 'https://github.com/heisjuanda/diagramasNoApropiativos')
    createWork('EXPLORE MY GIT', 'Github', '04', 'interactable work-content__more-projects', 'https://github.com/heisjuanda?tab=repositories')

    effect('titleName1', 'letterName1')
    effect('titleName2', 'letterName2')
    effect('about', 'lettersAbout')
    effect('contact', 'letterContact')
    setTimeout(() => {
        document.querySelectorAll('.letterName1').forEach((element, index) => {
            element.style.animation = 'textReveal 1s ease-in-out forwards'
            element.style.animationDelay = index * 0.08 + 's'
        })
        document.querySelectorAll('.letterName2').forEach((element, index) => {
            element.style.animation = 'textReveal 1s ease-in-out forwards'
            element.style.animationDelay = index * 0.1 + 's'
        })
    }, 6100)
    var doAnimationContact = true
    const animationContact = () => {
        document.querySelectorAll('.letterContact').forEach((el, id) => {
            if (id != 5) {
                el.style.animation = 'textReveal 0.7s ease-in-out forwards'
                el.style.animationDelay = (id * 0.06) + 's'
            } else {
                el.style.opacity = 0
            }
        })
        doAnimationContact = false
    }
    // Detectar los enlaces internos y desplazar suavemente hacia la sección correspondiente
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        if (anchor.className !== 'letsGoBack' && (anchor.id !== 'aboutMenuM' && anchor.id !== 'workMenuM' && anchor.id !== 'contactMenuM')) {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(anchor.hash);
                if (target) {
                    setTimeout(() => {
                        const offset = target.offsetTop; // La posición del destino en la página
                        const duration = 300; // La duración de la animación en milisegundos
                        const startTime = performance.now(); // El tiempo de inicio de la animación
                        // Función para actualizar el desplazamiento de la página
                        function updateScroll() {
                            const elapsed = performance.now() - startTime; // El tiempo transcurrido desde el inicio de la animación
                            const progress = Math.min(1, elapsed / duration); // El progreso de la animación (entre 0 y 1)
                            const ease = easeInOutQuad(progress); // Función de suavizado (opcional)
                            window.scrollTo(0, offset * ease); // Actualiza el desplazamiento de la página
                            if (progress < 1) requestAnimationFrame(updateScroll); // Si la animación no ha terminado, sigue actualizando el desplazamiento
                        }
                        // Función de suavizado (opcional)
                        function easeInOutQuad(progress) {
                            return progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
                        }
                        // Comienza la animación
                        requestAnimationFrame(updateScroll);
                    }, 300)
                    if (anchor.id == 'goToAbout') {
                        sectionTransition1.style.animation = 'scaling 1.5s ease-in-out'
                    } else if (anchor.id == 'goToWork') {
                        sectionTransition2.style.animation = 'scaling 1.5s ease-in-out'
                    } else if (anchor.id == 'goToContact') {
                        sectionTransition3.style.animation = 'scaling 1.5s ease-in-out'
                    }
                    animationTransitionHelper.style.animation = 'scalingHelping 1.3s ease-in-out 0.3s'
                    setTimeout(() => {
                        sectionTransition1.style.animation = ''
                        sectionTransition2.style.animation = ''
                        sectionTransition3.style.animation = ''
                        animationTransitionHelper.style.animation = ''
                    }, 1500)
                }
            });
        }
    });
    //Detectar Scroll usuario
    let excecuted = false
    const appearLetters = () => {
        const elements = document.querySelectorAll('.lettersAbout')
        elements.forEach((el, id) => {
            if ((id == 8) || (id == 14)) {
                el.style.opacity = 0
            } else {
                el.style.animation = 'textReveal 0.8s ease-in-out forwards'
                el.style.animationDelay = id * 0.06 + 's'
            }
        })
    }
    let workTransition = value => {
        if(value<=1){
            dot.style.transform = `translate(-50%, -50%) scale3d(${value},${value},${value})`
            //dot.style.webkitTransform = `translate(-50%, -50%) scale(${value})`
            workSection.style.backgroundColor = '#E7E5DC'
        }else{
            workSection.style.backgroundColor = 'black'
        }
    }
    document.addEventListener('scroll', () => {
        let value = window.scrollY + window.innerWidth / 4;
        let valueM = window.scrollY
        goBack.style.opacity = 0
        if (value > aboutSection.offsetTop) {
            clearTimeout(timeOut)
            timeOut = setTimeout(() => {
                goBack.style.opacity = 1
            }, 500)
        }
        if (((aboutSection.offsetTop / 2) < value) && !excecuted) {
            setTimeout(() => {
                appearLetters()
            }, 500)
            excecuted = true
        }
        if (workSection.offsetTop > valueM) {
            workSection.style.backgroundColor = '#E7E5DC'
            dot.style.transform = 'translate(-50%, -50%) scale3d(0,0,0)'
        }else if(valueM > contactSection.offsetTop){
            dot.style.transform = 'translate(-50%, -50%) scale3d(1,1,1)'
        }
        if (workSection.offsetTop < valueM && contact.offsetTop > valueM) {
                let valueN = valueM - workSection.offsetTop
                if (window.innerWidth < 470) {
                    workTransition(valueN * 0.01);
                } else if (window.innerWidth < 600) {
                    workTransition(valueN * 0.007);
                } else if (window.innerWidth < 900) {
                    workTransition(valueN * 0.006);
                } else {
                    workTransition(valueN * 0.002);
                }
        }
        if (doAnimationContact && value >= contactSection.offsetTop) {
            animationContact();
        }
    })
    //Saber que dispositivo es para aplicar el trailer
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Es un teléfono o tableta
        const trailer = document.getElementById("trailer");
        trailer.style.display = 'none'
    } else {
        window.addEventListener('resize', () => {
            if (window.innerWidth > 850) {
                location.reload()
            }
        })
        let size1 = 0
        let size2 = 0
        //mouse trailer
        const trailer = document.getElementById("trailer");
        document.body.style.cursor = "none";
        const animateTrailer = (e, interacting) => {
            const x = e.clientX - trailer.offsetWidth / 2,
                y = e.clientY - trailer.offsetHeight / 2;
            if (window.innerWidth < 550) {
                size1 = 0.63
                size2 = 0.15
            } else if (window.innerWidth < 700) {
                size1 = 0.75
                size2 = 0.20
            } else if (window.innerWidth < 1000) {
                size1 = 0.87
                size2 = 0.20
            } else {
                size1 = 1
                size2 = 0.25
            }
            const keyframes = {
                transform: `translate(${x}px, ${y}px) scale(${interacting ? size1 : size2})`,
                //webkitTransform: `translate(${x}px, ${y}px) scale(${interacting ? size1 : size2})`
            }
            trailer.animate(keyframes, {
                duration: 100,
                fill: "forwards",
            });
        }

        window.onmousemove = e => {
            const interactable = e.target.closest(".interactable"),
                interacting = interactable !== null;
            const icon = document.getElementById("trailer-icon");
            icon.style.opacity = '0'
            animateTrailer(e, interacting);
            if (interacting && e.target.closest('.work-content__project-one')) {
                icon.style.opacity = '1'
                circle.style.mixBlendMode = 'normal'
                circle.style.opacity = '0.8'
                icon.src = 'assets/img/whitePc.webp'
            } else if (interacting && e.target.closest('.work-content__project-two')) {
                icon.style.opacity = '1'
                circle.style.mixBlendMode = 'normal'
                circle.style.opacity = '0.8'
                icon.src = 'assets/img/calculatorProject.webp'
            } else if (interacting && e.target.closest('.work-content__project-three')) {
                icon.style.opacity = '1'
                circle.style.mixBlendMode = 'normal'
                circle.style.opacity = '0.8'
                icon.src = 'assets/img/newtonRaphsonProject.webp'
            } else if (interacting && e.target.closest('.work-content__project-four')) {
                icon.style.opacity = '1'
                circle.style.mixBlendMode = 'normal'
                circle.style.opacity = '0.8'
                icon.src = 'assets/img/algorithmsSortProject.webp'
            } else if (interacting && e.target.closest('.work-content__more-projects')) {
                icon.style.opacity = '1'
                circle.style.mixBlendMode = 'normal'
                circle.style.opacity = '0.8'
                icon.src = 'assets/img/blackCat.webp'
            }
            else if (e.target.closest('.imgs') || e.target.closest('.Pictures')) {
                circle.style.mixBlendMode = 'normal'
            } else {
                icon.style.opacity = '0'
                circle.style.mixBlendMode = 'difference'
                icon.setAttribute('src', '')
                circle.style.opacity = '1'
            }
        }
    }
}//)
