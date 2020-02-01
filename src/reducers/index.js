//value:'*',svalue:'&times;'
// value:'/',svalue:'&divide;'
let initialstate={
  input:'',
  calculatedValue:'',
  noOfButtons:[
    {type:'button', value:'AC',svalue:'C', className:'btn btn-info waves-effect'},
    {type:'button', value:'-',svalue:'+/-', className:'btn btn-info waves-effect'},
    {type:'button', value:'%',svalue:'%', className:'btn btn-info waves-effect'},
    {type:'button', value:'/',svalue:'&divide;', className:'btn btn-info waves-effect'},
    {type:'button', value:'7',svalue:'7', className:'btn btn-light waves-effect'},
    {type:'button', value:'8',svalue:'8', className:'btn btn-light waves-effect'},
    {type:'button', value:'9',svalue:'9', className:'btn btn-light waves-effect'},
    {type:'button', value:'*',svalue:'&times;', className:'operator btn btn-info waves-effect'},
    {type:'button', value:'4',svalue:'4', className:'btn btn-light waves-effect'},
    {type:'button', value:'5',svalue:'5', className:'btn btn-light waves-effect'},
    {type:'button', value:'6',svalue:'6', className:'btn btn-light waves-effect'},
    {type:'button', value:'-',svalue:'-', className:'operator btn btn-info waves-effect'},
    {type:'button', value:'1',svalue:'1', className:'btn btn-light waves-effect'},
    {type:'button', value:'2',svalue:'2', className:'btn btn-light waves-effect'},
    {type:'button', value:'3',svalue:'3', className:'btn btn-light waves-effect'},
    {type:'button', value:'+',svalue:'+', className:'operator btn btn-info waves-effect'},
    {type:'button', value:'0',svalue:'0', className:'btn btn-light waves-effect'},
    {type:'button', value:'.',svalue:'&middot;', className:'btn btn-light waves-effect'},
    {type:'button', value:'=',svalue:'=', className:'equal-sign equallButton btn-default waves-effect'},

  ]
}
const calculatedInput = (state = initialstate, action) => {
    switch (action.type) {
      case 'input':
        return {
          ...state,
          input:action.payload,
          }
      case 'calculatedValue':  
      return {
        ...state,
        calculatedValue:action.payload
        }  
      default:
        return state
    }
  }
  export default calculatedInput