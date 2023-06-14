export default {
  warehouse: {
    createdBy: 'CreatedBy',
    updatedBy: 'UpdatedBy',
    tenantId: 'TenantId',
    appId: 'AppId',
    status: 'Status',
    name: 'Name',
    key: 'Key',
    address: 'Address',
    description: 'Description',
    addWarehouse: 'Add Warehouse',
    editWarehouse: 'Edit Warehouse',
    warehouseList: 'Warehouse List',
  },
  productTag: {
    createdBy: 'CreatedBy',
    updatedBy: 'UpdatedBy',
    tenantId: 'TenantId',
    appId: 'AppId',
    status: 'Status',
    name: 'Name',
    key: 'Key',
    remark: 'Remark',
    addProductTag: 'Add ProductTag',
    editProductTag: 'Edit ProductTag',
    productTagList: 'ProductTag List',
  },
  product: {
    createdBy: 'CreatedBy',
    updatedBy: 'UpdatedBy',
    tenantId: 'TenantId',
    appId: 'AppId',
    status: 'Status',
    type: 'Type',
    tag: 'Tag',
    dose: 'Dose',
    doseUnit: 'DoseUnit',
    activeIngredient: 'ActiveIngredient',
    activeIngredientUnit: 'ActiveIngredientUnit',
    preparation: 'Preparation',
    preparationUnit: 'PreparationUnit',
    package: 'Package',
    price: 'Price',
    splitable: 'Splitable',
    splitPrice: 'SplitPrice',
    genericName: 'GenericName',
    manufacturer: 'Manufacturer',
    category: 'Category',
    dosageForm: 'DosageForm',
    productName: 'ProductName',
    approvalNumber: 'ApprovalNumber',
    barcode: 'Barcode',
    usage: 'Usage',
    pharmacologicalClassification: 'PharmacologicalClassification',
    prescription: 'Prescription',
    skinTest: 'SkinTest',
    instructions: 'Instructions',
    costCount: 'CostCount',
    enabled: 'Enabled',
    location: 'Location',
    stockThreshold: 'StockThreshold',
    addProduct: 'Add Product',
    editProduct: 'Edit Product',
    productList: 'Product List',
  },
  inventory: {
    status: 'Status',
    totalCount: 'TotalCount',
    splitQty: 'SplitQty',
    quantity: 'Quantity',
    stockThreshold: 'StockThreshold',
    productId: 'ProductId',
    warehouseId: 'WarehouseId',
    addInventory: 'Add Inventory',
    editInventory: 'Edit Inventory',
    inventoryList: 'Inventory List',
  },
  inventoryItem: {
    status: 'Status',
    splitQty: 'SplitQty',
    quantity: 'Quantity',
    batchNo: 'BatchNo',
    factory: 'Factory',
    productionDate: 'ProductionDate',
    expirationDate: 'ExpirationDate',
    unitPrice: 'UnitPrice',
    inboundId: 'InboundId',
    productId: 'ProductId',
    warehouseId: 'WarehouseId',
    addInventoryItem: 'Add InventoryItem',
    editInventoryItem: 'Edit InventoryItem',
    inventoryItemList: 'InventoryItem List',
  },
  inbound: {
    status: 'Status',
    type: 'Type',
    batchNo: 'BatchNo',
    factory: 'Factory',
    serialNo: 'SerialNo',
    productionDate: 'ProductionDate',
    expirationDate: 'ExpirationDate',
    unitPrice: 'UnitPrice',
    quantity: 'Quantity',
    remark: 'Remark',
    inboundDate: 'InboundDate',
    originalOutboundId: 'OriginalOutboundId',
    productId: 'ProductId',
    warehouseId: 'WarehouseId',
    addInbound: 'Add Inbound',
    editInbound: 'Edit Inbound',
    inboundList: 'Inbound List',
  },
  outbound: {
    status: 'Status',
    type: 'Type',
    outboundDate: 'OutboundDate',
    quantity: 'Quantity',
    productId: 'ProductId',
    useByName: 'UseByName',
    useByKey: 'UseByKey',
    receivedDeptName: 'ReceivedDeptName',
    receivedDeptKey: 'ReceivedDeptKey',
    receivedName: 'ReceivedName',
    receivedBy: 'ReceivedBy',
    remark: 'Remark',
    prescriptionNo: 'PrescriptionNo',
    inventoryListId: 'InventoryListId',
    warehouseId: 'WarehouseId',
    addOutbound: 'Add Outbound',
    editOutbound: 'Edit Outbound',
    outboundList: 'Outbound List',
  },
  patient: {
    status: 'Status',
    key: 'Key',
    type: 'Type',
    name: 'Name',
    sex: 'Sex',
    cardType: 'CardType',
    cardNo: 'CardNo',
    birth: 'Birth',
    height: 'Height',
    nation: 'Nation',
    nativePlace: 'NativePlace',
    country: 'Country',
    address: 'Address',
    addressArea: 'AddressArea',
    addressStreet: 'AddressStreet',
    addressCommunity: 'AddressCommunity',
    address2: 'Address2',
    medicalHistory: 'MedicalHistory',
    allergyHistory: 'AllergyHistory',
    addPatient: 'Add Patient',
    editPatient: 'Edit Patient',
    patientList: 'Patient List',
  },
  student: {
    status: 'Status',
    patientId: 'PatientId',
    name: 'Name',
    no: 'No',
    studentNo: 'StudentNo',
    pname: 'Pname',
    phone: 'Phone',
    pname2: 'Pname2',
    phone2: 'Phone2',
    isStay: 'IsStay',
    cansport: 'Cansport',
    class: 'Class',
    grade: 'Grade',
    schoolSection: 'SchoolSection',
    faculty: 'Faculty',
    addStudent: 'Add Student',
    editStudent: 'Edit Student',
    studentList: 'Student List',
  },
  teacher: {
    status: 'Status',
    patientId: 'PatientId',
    name: 'Name',
    no: 'No',
    wphone: 'Wphone',
    deparment: 'Deparment',
    faculty: 'Faculty',
    addTeacher: 'Add Teacher',
    editTeacher: 'Edit Teacher',
    teacherList: 'Teacher List',
  },
};