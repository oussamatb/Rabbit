module.exports = {
  content: [ "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode:'jit',
  purge : [ "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    
    extend: {
      keyframes: {
        appeare : {
          '0%': {opacity : 0 ,transform: 'translateY(+100px)'},
          '100%': { opacity :1 ,transform: 'translateY(0px)'},
        },
        dropDown : {
          '0%': {opacity : 0 ,transform: 'translateY(-100px)'},
          '100%': { opacity :1 ,transform: 'translateY(0px)'},
        },
        grow :{
          '0%':{transform: 'rotate(10deg) w-10'},
          '100%':{transform: 'rotate (20deg) w-30'}
        },
      },
      
      animation : {
        appeare : 'appeare 1s ease-in-out ', 
        dropDown : 'dropDown 1s ease-in-out ', 
      }
        
      ,
     
      colors: {
        'Navv': '#2E3254',
        'grayyy':'#FBF3E3',
        'seell':'#262948',
        'blued':'#858BEB',
        'selectes': '#252748'
      },
      backgroundImage: {
      },
      fontFamily: {
        CalSansSemiBold:["CalSans-SemiBold"],
        Playfair :["Playfair Display"], 
        PlayfairB:[ "Playfair DisplayB"],
        Poppins:["Poppins-Regular"],
      }
    },
  },
  plugins: [ require('@tailwindcss/line-clamp') ,
            require("tailwindcss-animation-delay"),
              
  
],
}
