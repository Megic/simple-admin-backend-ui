export function getSPE(product:any){
    //剂量-最小规格
    let dosestr=product.dose?product.dose+product.doseUnit:''
    let activetr=product.activeIngredient?product.activeIngredient+product.activeIngredientUnit:''
    let slistr = dosestr&&activetr?':':''
    let prstr = dosestr+slistr+activetr
    if(prstr)prstr+='*'
    let packstr = product.preparationUnit!=product.package?'/'+product.package:''
    //有效成分
    return `${prstr}${product.preparation}${product.preparationUnit}${packstr}`;
}