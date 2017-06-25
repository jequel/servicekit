class ServiceKit
{
    constructor(rootPath) { 
      this.rootPath = rootPath; 
      console.log('ServiceKit : constructor called'); 
   } 

   getServiceFileObject(rootPath) {
        let serv = {
            servObjContent01 : getFileContent(rootPath + '\' +filePath'), 
            servObjContent02 : getFileContent(rootPath + '\' +filePath'), 
            servObjContent03 : getFileContent(rootPath + '\' +filePath'), 
            servObjContent04 : getFileContent(rootPath + '\' +filePath') 
    }
        return serv;    
   }

   getFileContent(path){
       console.log('\'getFileContent\' called');
       return 'content'; 
   }
   
}