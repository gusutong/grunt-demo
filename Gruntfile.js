module.exports = function(grunt){
  grunt.initConfig({
    mochacli:{
      options:{

      }
    }    
  });
  grunt.loadNpmTasks('grunt-spritesmith');
  grunt.registerTask('default',['sprite']);
};
