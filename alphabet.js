const alphabetImages = [
    { letter: 'A', img: 'assets/images/A_image.jpeg' },
    { letter: 'C', img: 'assets/images/B_image.jpeg' },
    { letter: 'B', img: 'assets/images/C_image.jpeg' },
    { letter: 'D', img: 'assets/images/D_image.jpeg' },
    { letter: 'E', img: 'assets/images/E_image.jpeg' },
    { letter: 'F', img: 'assets/images/F_image.jpeg' },
    { letter: 'G', img: 'assets/images/G_image.jpeg' },
    { letter: 'H', img: 'assets/images/H_image.jpeg' },
    { letter: 'I', img: 'assets/images/I_image.jpeg' },
    { letter: 'J', img: 'assets/images/J_image.jpeg' },
    { letter: 'K', img: 'assets/images/K_image.jpeg' },
    { letter: 'L', img: 'assets/images/L_image.jpeg' },
    { letter: 'M', img: 'assets/images/M_image.jpeg' },
    { letter: 'N', img: 'assets/images/N_image.jpeg' },
    { letter: 'O', img: 'assets/images/O_image.jpeg' },
    { letter: 'P', img: 'assets/images/P_image.jpeg' },
    { letter: 'Q', img: 'assets/images/Q_image.jpeg' },
    { letter: 'R', img: 'assets/images/R_image.jpeg' },
    { letter: 'S', img: 'assets/images/S_image.jpeg' },
    { letter: 'T', img: 'assets/images/T_image.jpeg' },
    { letter: 'U', img: 'assets/images/U_image.jpeg' },
    { letter: 'V', img: 'assets/images/V_image.jpeg' },
    { letter: 'W', img: 'assets/images/W_image.jpeg' },
    { letter: 'X', img: 'assets/images/X_image.jpeg' },
    { letter: 'Y', img: 'assets/images/Y_image.jpeg' },
    { letter: 'Z', img: 'assets/images/Z_image.jpeg' }
  ];


  function convertText() {
    const text = $('#text-input').val().toUpperCase();
    console.log(text);
    $('#gesture-output').html('');
  
    for (let char of text) {
      const letterObj = alphabetImages.find(obj => obj.letter === char);
      if (letterObj) {
        const imgElement = `<img src="${letterObj.img}" alt="${letterObj.letter}"  />`;
        $('#gesture-output').append(imgElement);
      }
    }
  }
  
  