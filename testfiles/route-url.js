/**
 * Created by issuser on 2017/5/11.
 */




var CONTEXT_PATH = "";

var LOCALE = "zh_CN";

var DEFAULT_PAGE_SIZE = 10;

var CURRENT_MONTH = {
	"id" : "201705",
	"year" : {
		"id" : 2017,
		"months" : [ ]
	},
	"month" : 5,
	"startDate" : "2017-04-21",
	"endDate" : "2017-05-22"
};

var CURRENCY = {
	"id" : "CNY",
	"symbol" : "￥",
	"name" : "人民币",
	"exchangeRate" : 1,
	"createTime" : "2016-05-03T16:45:07",
	"modifyTime" : "2016-05-03T16:45:07"
};

var UPLOADER = {
	"url" : "http://core.libertymutual.com.cn:8888/uploader/upload.do",
	"fileFieldName" : "files",
	"charsetName" : "utf-8",
	"urlPreview" : "http://core.libertymutual.com.cn:8888/uploader/preview.do",
	"urlView" : "http://core.libertymutual.com.cn:8888/uploader/view.do",
	"urlDownload" : "http://core.libertymutual.com.cn:8888/uploader/download.do",
	"urlShow" : "http://core.libertymutual.com.cn:8888/uploader/show.do",
	"systemCode" : "ems",
	"systemKey" : "ems1001"
};

var ACCEPT_FILE_SUFFIX = ".doc,.docx,.xls,.xlsx,.ppt,.pptx,.vsd,.txt,.rtf,.pdf,.swf,.jpg,.jpe,.jpeg,.gif,.bmp,.png,.tif,.tiff,.msg";



var STATIC_SETTING = [ {
	"id" : 394,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "2",
	"name" : "审批中-approving",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:55",
	"modifyTime" : "2016-07-26T16:12:48",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 403,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "R",
	"name" : "退回-reject",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-07-26T16:13:13",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 404,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "P",
	"name" : "待支付",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 405,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "A",
	"name" : "审批完成",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 406,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "RP",
	"name" : "支付退回",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 407,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "B",
	"name" : "审批完成,待签收-approved",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-07-26T15:53:39",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 408,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "C",
	"name" : "已签收,待审核-signed",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-07-26T16:14:04",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 409,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 311,
		"userRoles" : [ ]
	},
	"code" : "Z",
	"name" : "完成",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:55",
	"modifyTime" : "2016-09-21T16:26:10",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 355,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "PAA",
	"name" : "待验收",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-07-06T10:03:58",
	"modifyTime" : "2016-07-06T10:03:58",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 356,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "PAY",
	"name" : "验收通过,待建卡",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-07-06T10:03:58",
	"modifyTime" : "2016-07-06T10:03:58",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 357,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "PAN",
	"name" : "验收不通过",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-07-06T10:03:58",
	"modifyTime" : "2016-07-06T10:03:58",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 358,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "PB",
	"name" : "建卡完成",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-07-06T10:03:58",
	"modifyTime" : "2016-07-06T10:03:58",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 359,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "PAT",
	"name" : "转固",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-07-06T10:03:58",
	"modifyTime" : "2016-07-06T10:03:58",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 369,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "EA",
	"name" : "预支归还待确认",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-06-30T18:20:20",
	"modifyTime" : "2016-06-30T18:20:20",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 154,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "R",
	"name" : "待复核",
	"type" : "status",
	"status" : "0",
	"createTime" : "2016-07-10T18:20:31",
	"modifyTime" : "2016-07-10T18:20:31",
	"ordinal" : 2,
	"loadType" : "1"
}, {
	"id" : 159,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "E",
	"name" : "已报销/已归还",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-05-27T15:27:03",
	"modifyTime" : "2016-05-27T15:27:03",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 166,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "RA",
	"name" : "单据签收退回",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-05-26T11:09:52",
	"modifyTime" : "2016-05-26T11:09:52",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 167,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "RB",
	"name" : "单据审核退回",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-05-26T11:09:52",
	"modifyTime" : "2016-05-26T11:09:52",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 307,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "supplier_process",
	"name" : "供应商处理",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-07-25T12:22:56",
	"modifyTime" : "2016-07-25T12:22:56",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/supplier/manage",
	"propertyC01" : "SP",
	"propertyC02" : "supplierProcessService",
	"i18nKey" : "supplier.process"
}, {
	"id" : 514,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "F",
	"name" : "已归档",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-06-14T10:19:41",
	"modifyTime" : "2016-06-14T10:19:41",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 515,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "D",
	"name" : "已签章",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-06-14T10:19:42",
	"modifyTime" : "2016-06-14T10:19:42",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 586,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "1",
	"name" : "有效",
	"type" : "status",
	"status" : "1",
	"createTime" : "2016-04-23T02:36:43",
	"modifyTime" : "2016-04-23T02:36:43",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 587,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "0",
	"name" : "无效",
	"type" : "status",
	"status" : "1",
	"createTime" : "2016-04-23T02:36:43",
	"modifyTime" : "2016-04-23T02:36:43",
	"ordinal" : 1,
	"loadType" : "1"
}, {
	"id" : 594,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "1",
	"name" : "是",
	"type" : "yes_no",
	"status" : "1",
	"createTime" : "2016-04-23T02:36:43",
	"modifyTime" : "2016-04-23T02:36:43",
	"ordinal" : 0,
	"loadType" : "1",
	"i18nKey" : "app.yes"
}, {
	"id" : 595,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "0",
	"name" : "否",
	"type" : "yes_no",
	"status" : "1",
	"createTime" : "2016-04-23T02:36:43",
	"modifyTime" : "2016-04-23T02:36:43",
	"ordinal" : 0,
	"loadType" : "1",
	"i18nKey" : "app.no"
}, {
	"id" : 596,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "0",
	"name" : "暂存-Saved",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-07-26T15:31:16",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 597,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "1",
	"name" : "已提交-submitted",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-07-26T15:53:13",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 13202,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "W",
	"name" : "已作废",
	"type" : "application_status",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:55",
	"modifyTime" : "2016-07-26T16:12:48",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 12963,
	"creator" : {
		"id" : 155,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 155,
		"userRoles" : [ ]
	},
	"code" : "5A546669-1FC6-4942-8098-684CEB7B5681",
	"name" : "5A546669-1FC6-4942-8098-684CEB7B5681",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2016-10-13T17:33:59",
	"modifyTime" : "2016-10-13T17:33:59",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "155",
	"propertyN00" : 44
}, {
	"id" : 13095,
	"creator" : {
		"id" : 366,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 366,
		"userRoles" : [ ]
	},
	"code" : "7F21F91C-622B-4159-846D-EC02C10C5BA3",
	"name" : "7F21F91C-622B-4159-846D-EC02C10C5BA3",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2016-10-29T13:51:46",
	"modifyTime" : "2016-10-29T13:51:46",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "366",
	"propertyN00" : 451,
	"remarks" : "授权代为报销通讯费."
}, {
	"id" : 13176,
	"creator" : {
		"id" : 589,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 589,
		"userRoles" : [ ]
	},
	"code" : "56A4770E-B1B8-4C3F-AFD6-697EEEF36C0A",
	"name" : "56A4770E-B1B8-4C3F-AFD6-697EEEF36C0A",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2016-11-09T09:03:02",
	"modifyTime" : "2016-11-09T09:03:02",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "589",
	"propertyN00" : 615,
	"remarks" : "费用报销代填写"
}, {
	"id" : 13179,
	"creator" : {
		"id" : 135,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 135,
		"userRoles" : [ ]
	},
	"code" : "D15EA56C-8FF7-466E-B698-37DE1F0FB7CA",
	"name" : "D15EA56C-8FF7-466E-B698-37DE1F0FB7CA",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2016-11-09T17:40:25",
	"modifyTime" : "2016-11-09T17:40:25",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "135",
	"propertyN00" : 194
}, {
	"id" : 553,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "accrualPlan_before",
	"name" : "方案签报",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/accrual/plan",
	"propertyC01" : "APB",
	"propertyC02" : "accrualPlanBeforeService",
	"propertyC03" : "accrual_before",
	"i18nKey" : "accrual.plan.before"
}, {
	"id" : 554,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "accrualPlan_expense",
	"name" : "方案/框架合同事前申请报销",
	"type" : "application_type",
	"status" : "0",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/accrual/plan/expense",
	"propertyC01" : "APE",
	"propertyC02" : "accrualPlanExpenseService",
	"propertyC03" : "accrual_expense",
	"i18nKey" : "accrual.plan.expense"
}, {
	"id" : 584,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "accrual_before",
	"name" : "事前申请",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/accrual/accrual",
	"propertyC01" : "AB",
	"propertyC02" : "accrualBeforeService",
	"i18nKey" : "accrual.before"
}, {
	"id" : 585,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "accrual_expense",
	"name" : "事前申请报销",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/accrual/accrual/expense",
	"propertyC01" : "AE",
	"propertyC02" : "accrualExpenseService",
	"i18nKey" : "accrual.expense"
}, {
	"id" : 611,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "accrued_expense",
	"name" : "费用预提",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-09-12T11:14:27",
	"modifyTime" : "2016-09-12T11:14:27",
	"ordinal" : 1,
	"loadType" : "1",
	"propertyC00" : "/expense/accrual/accrued",
	"propertyC01" : "ADE",
	"propertyC02" : "accruedExpenseService",
	"i18nKey" : "menu.expense.accrual.accrued"
}, {
	"id" : 65,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "advance",
	"name" : "预支申请",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/advance/advance",
	"propertyC01" : "AA",
	"propertyC02" : "advanceService",
	"i18nKey" : "advance"
}, {
	"id" : 98,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "advance_return",
	"name" : "预支归还",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/advance/return",
	"propertyC01" : "AR",
	"propertyC02" : "advanceReturnService",
	"i18nKey" : "advance.return"
}, {
	"id" : 12159,
	"code" : "asset_allocation",
	"name" : "资产调拨",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-09-12T10:05:07",
	"modifyTime" : "2016-09-12T10:05:07",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/assetAllocation",
	"propertyC01" : "EAA",
	"propertyC02" : "assetAllocationService"
}, {
	"id" : 12158,
	"code" : "asset_disposal",
	"name" : "资产处置",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-09-12T10:00:42",
	"modifyTime" : "2016-09-12T10:00:42",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/assetDisposal",
	"propertyC01" : "EAD",
	"propertyC02" : "assetDisposalService"
}, {
	"id" : 602,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "budget_adjust",
	"name" : "预算调整",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/budget/adjust",
	"propertyC01" : "BA",
	"propertyC02" : "budgetAdjustService",
	"i18nKey" : "budget.adjust.list"
}, {
	"id" : 413,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "budget_upload",
	"name" : "预算导入",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/budget/upload",
	"propertyC01" : "BI",
	"propertyC02" : "budgetUploadService",
	"i18nKey" : "budget.upload"
}, {
	"id" : 12142,
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "capital_invest_apply",
	"name" : "投资申请",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-09-09T17:02:30",
	"modifyTime" : "2016-09-09T17:02:30",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/capital/invest/apply",
	"propertyC01" : "CIA",
	"propertyC02" : "capitalInvestApplyService"
}, {
	"id" : 99,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "contract_expense",
	"name" : "费用类合同",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-05-23T10:55:38",
	"modifyTime" : "2016-05-23T10:55:38",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/contract/expense",
	"propertyC01" : "CE",
	"propertyC02" : "expenseContractService",
	"i18nKey" : "contract.expense"
}, {
	"id" : 608,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "contract_nonexpense",
	"name" : "业务类合同",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-05-27T18:08:00",
	"modifyTime" : "2016-05-27T18:08:00",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/contract/nonexpense",
	"propertyC01" : "CN",
	"propertyC02" : "contractNonexpenseService",
	"i18nKey" : "contract.nonexpense"
}, {
	"id" : 459,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "contract_stampTax",
	"name" : "印花税",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-06-07T18:36:35",
	"modifyTime" : "2016-06-07T18:36:35",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/contract/stampTax",
	"propertyC01" : "CT",
	"propertyC02" : "contractStampTaxService",
	"i18nKey" : "contract.stampTax"
}, {
	"id" : 138,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "expense_airTicket",
	"name" : "机票管理",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/airTicket",
	"propertyC01" : "EA",
	"propertyC02" : "airTicketExpenseService",
	"i18nKey" : "expense.airTicket"
}, {
	"id" : 268,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "expense_cost",
	"name" : "人力成本结算",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/cost",
	"propertyC01" : "EC",
	"propertyC02" : "costExpenseService",
	"i18nKey" : "expense.cost"
}, {
	"id" : 510,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "expense_hospitality",
	"name" : "招待费报销",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/hospitality",
	"propertyC01" : "EH",
	"propertyC02" : "hospitalityService",
	"propertyC03" : "expense_other",
	"i18nKey" : "expense.hospitality"
}, {
	"id" : 448,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "expense_other",
	"name" : "通用报销",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/other",
	"propertyC01" : "EO",
	"propertyC02" : "otherExpenseService",
	"i18nKey" : "expense.other"
}, {
	"id" : 449,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "expense_phoneBills",
	"name" : "电话费报销",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/phoneBills",
	"propertyC01" : "EP",
	"propertyC02" : "phoneBillsService",
	"propertyC03" : "expense_other",
	"i18nKey" : "expense.phoneBills"
}, {
	"id" : 538,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "expense_relation",
	"name" : "中国为关联公司代垫",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/relation",
	"propertyC01" : "ER",
	"propertyC02" : "relationExpenseService",
	"propertyC03" : "expense_other",
	"i18nKey" : "expense.relation"
}, {
	"id" : 464,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "expense_travel",
	"name" : "差旅费报销",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/travel",
	"propertyC01" : "ET",
	"propertyC02" : "travelService",
	"propertyC03" : "expense_other",
	"i18nKey" : "expense.travel"
}, {
	"id" : 609,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "expense_vehicle",
	"name" : "车辆报销",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/vehicle",
	"propertyC01" : "EV",
	"propertyC02" : "vehicleService",
	"i18nKey" : "expense.vehicle"
}, {
	"id" : 101,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "instalment_before",
	"name" : "分期申请",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-05-23T10:55:38",
	"modifyTime" : "2016-05-23T10:55:38",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/instalment",
	"propertyC01" : "IB",
	"propertyC02" : "instalmentBeforeService",
	"propertyC03" : "accrual_before",
	"i18nKey" : "expense.instalment.before"
}, {
	"id" : 607,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "instalment_expense",
	"name" : "分期报销",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-05-23T10:55:38",
	"modifyTime" : "2016-05-23T10:55:38",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/expense/instalment/expense",
	"propertyC01" : "IE",
	"propertyC02" : "instalmentExpenseService",
	"propertyC03" : "accrual_expense",
	"i18nKey" : "expense.instalment.expense"
}, {
	"id" : 504,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "my_phoneBillsConfig",
	"name" : "我的电话费标准申请",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-04-27T04:51:49",
	"modifyTime" : "2016-04-27T04:51:49",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/my/phoneBillsConfig",
	"propertyC01" : "MP",
	"propertyC02" : "phoneBillsConfigService",
	"i18nKey" : "my.phoneBillsConfig"
}, {
	"id" : 512,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "purchase_accrual",
	"name" : "采购事前申请-非在建工程",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-06-07T10:45:10",
	"modifyTime" : "2016-06-07T10:45:10",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/purchase/accrual",
	"propertyC01" : "PA",
	"propertyC02" : "purchaseAccrualService",
	"propertyC03" : "accrual_before",
	"i18nKey" : "purchase.accrual"
}, {
	"id" : 353,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "purchase_accrualBuilding",
	"name" : "采购事前申请-在建工程",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-07-08T15:11:37",
	"modifyTime" : "2016-07-08T15:11:37",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/purchase/accrualBuilding",
	"propertyC01" : "PAB",
	"propertyC02" : "purchaseAccrualBuildingService",
	"propertyC03" : "accrual_before",
	"i18nKey" : "purchase.accrualBuilding"
}, {
	"id" : 513,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "purchase_expense",
	"name" : "采购资金结算",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-06-07T10:45:10",
	"modifyTime" : "2016-06-07T10:45:10",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/purchase/expense",
	"propertyC01" : "PE",
	"propertyC02" : "purchaseExpenseService",
	"propertyC03" : "accrual_expense",
	"i18nKey" : "purchase.expense"
}, {
	"id" : 281,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "purchase_issue",
	"name" : "库存发放",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-07-01T16:32:01",
	"modifyTime" : "2016-07-01T16:32:01",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/purchase/issue",
	"propertyC01" : "PI",
	"propertyC02" : "purchaseRequestService",
	"i18nKey" : "purchase.issue"
}, {
	"id" : 511,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "purchase_request",
	"name" : "采购需求申请",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-06-07T10:45:10",
	"modifyTime" : "2016-06-07T10:45:10",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/purchase/request",
	"propertyC01" : "PR",
	"propertyC02" : "purchaseRequestService",
	"i18nKey" : "purchase.request"
}, {
	"id" : 311,
	"creator" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 0,
		"userRoles" : [ ]
	},
	"code" : "purchase_transferSolid",
	"name" : "在建工程转固",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2016-06-29T17:50:14",
	"modifyTime" : "2016-06-29T17:50:14",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/purchase/transferSolid",
	"propertyC01" : "PT",
	"propertyC02" : "purchaseAssetTransferSolidService",
	"i18nKey" : "purchase.transferSolid"
}, {
	"id" : 13215,
	"creator" : {
		"id" : 546,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 546,
		"userRoles" : [ ]
	},
	"code" : "C3F75646-C464-41F3-A566-991F7B88037A",
	"name" : "C3F75646-C464-41F3-A566-991F7B88037A",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2016-11-22T09:24:45",
	"modifyTime" : "2016-11-22T09:24:45",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "546",
	"propertyN00" : 329
}, {
	"id" : 13508,
	"creator" : {
		"id" : 185,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 185,
		"userRoles" : [ ]
	},
	"code" : "647893CD-3E7F-4A96-A8F5-76B7239703E7",
	"name" : "647893CD-3E7F-4A96-A8F5-76B7239703E7",
	"type" : "my_apply_auth",
	"status" : "0",
	"createTime" : "2016-12-14T10:33:32",
	"modifyTime" : "2016-12-14T10:34:42",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "185",
	"propertyN00" : 193,
	"remarks" : "111"
}, {
	"id" : 13615,
	"creator" : {
		"id" : 366,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 366,
		"userRoles" : [ ]
	},
	"code" : "659F931E-10AF-4C22-AD34-8A5B0ABB6C56",
	"name" : "659F931E-10AF-4C22-AD34-8A5B0ABB6C56",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2017-01-03T16:46:41",
	"modifyTime" : "2017-01-03T16:46:41",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "366",
	"propertyN00" : 981,
	"remarks" : "授权代为报销费用."
}, {
	"id" : 13565,
	"creator" : {
		"id" : 613,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 613,
		"userRoles" : [ ]
	},
	"code" : "98EB61C3-B9CE-4014-AEED-AB5F7C747790",
	"name" : "98EB61C3-B9CE-4014-AEED-AB5F7C747790",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2016-12-22T14:02:02",
	"modifyTime" : "2016-12-22T14:02:02",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "613",
	"propertyN00" : 615,
	"remarks" : "代填报销单"
}, {
	"id" : 13209,
	"creator" : {
		"id" : 507,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 507,
		"userRoles" : [ ]
	},
	"code" : "0601F4EE-CB04-45F5-94C6-351A7FD92F60",
	"name" : "0601F4EE-CB04-45F5-94C6-351A7FD92F60",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2016-11-16T14:00:14",
	"modifyTime" : "2016-11-16T14:00:14",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "507",
	"propertyN00" : 813
}, {
	"id" : 13237,
	"creator" : {
		"id" : 761,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 761,
		"userRoles" : [ ]
	},
	"code" : "8B6BC799-FAB2-44C5-872A-9F048AAE10B0",
	"name" : "8B6BC799-FAB2-44C5-872A-9F048AAE10B0",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2016-11-22T15:21:30",
	"modifyTime" : "2016-11-22T15:21:30",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "761",
	"propertyN00" : 794,
	"remarks" : "123"
}, {
	"id" : 14196,
	"creator" : {
		"id" : 557,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 557,
		"userRoles" : [ ]
	},
	"code" : "9AD40C22-2ABA-4AA0-B5AF-E72A67E8D275",
	"name" : "9AD40C22-2ABA-4AA0-B5AF-E72A67E8D275",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2017-04-17T15:56:34",
	"modifyTime" : "2017-04-17T15:56:34",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "557",
	"propertyN00" : 981
}, {
	"id" : 13875,
	"creator" : {
		"id" : 589,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 589,
		"userRoles" : [ ]
	},
	"code" : "C24C30BD-BEBF-44BC-9575-90648B32CB38",
	"name" : "C24C30BD-BEBF-44BC-9575-90648B32CB38",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2017-02-17T09:07:23",
	"modifyTime" : "2017-02-17T09:07:23",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "589",
	"propertyN00" : 1821
}, {
	"id" : 13939,
	"code" : "0",
	"name" : "无效",
	"type" : "app_status",
	"status" : "1",
	"createTime" : "2017-01-16T18:17:56",
	"modifyTime" : "2017-01-16T18:17:56",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 13940,
	"code" : "1",
	"name" : "有效",
	"type" : "app_status",
	"status" : "1",
	"createTime" : "2017-01-16T18:17:56",
	"modifyTime" : "2017-01-16T18:17:56",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 13941,
	"code" : "C",
	"name" : "公司",
	"type" : "dept_type",
	"status" : "1",
	"createTime" : "2017-01-16T18:26:32",
	"modifyTime" : "2017-01-16T18:26:32",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 13942,
	"code" : "D",
	"name" : "部门",
	"type" : "dept_type",
	"status" : "1",
	"createTime" : "2017-01-16T18:26:32",
	"modifyTime" : "2017-01-16T18:26:32",
	"ordinal" : 1,
	"loadType" : "1"
}, {
	"id" : 13943,
	"code" : "0",
	"name" : "总公司",
	"type" : "company_type",
	"status" : "1",
	"createTime" : "2017-01-16T18:20:39",
	"modifyTime" : "2017-01-16T18:20:39",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 13944,
	"code" : "1",
	"name" : "分公司",
	"type" : "company_type",
	"status" : "1",
	"createTime" : "2017-01-16T18:20:39",
	"modifyTime" : "2017-01-16T18:20:39",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 13945,
	"code" : "2",
	"name" : "支公司",
	"type" : "company_type",
	"status" : "1",
	"createTime" : "2017-01-16T18:20:39",
	"modifyTime" : "2017-01-16T18:20:39",
	"ordinal" : 0,
	"loadType" : "1"
}, {
	"id" : 14136,
	"creator" : {
		"id" : 495,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 495,
		"userRoles" : [ ]
	},
	"code" : "1DF930B6-FACC-4428-AE2C-054726275EFB",
	"name" : "1DF930B6-FACC-4428-AE2C-054726275EFB",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2017-04-07T14:50:00",
	"modifyTime" : "2017-04-07T14:50:00",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "495",
	"propertyN00" : 1947
}, {
	"id" : 14016,
	"creator" : {
		"id" : 495,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 495,
		"userRoles" : [ ]
	},
	"code" : "FEA99BCD-5337-47AA-ACE8-D4777CF2BDD5",
	"name" : "FEA99BCD-5337-47AA-ACE8-D4777CF2BDD5",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2017-03-15T13:37:08",
	"modifyTime" : "2017-03-15T13:37:08",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "495",
	"propertyN00" : 905,
	"remarks" : "差旅费和招待费代填授权"
}, {
	"id" : 14042,
	"code" : "capital_plan",
	"name" : "资金计划",
	"type" : "application_type",
	"status" : "1",
	"createTime" : "2017-02-21T21:42:16",
	"modifyTime" : "2017-02-21T21:42:16",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "/capital/plan",
	"propertyC01" : "CP",
	"propertyC02" : "capitalPlanService",
	"i18nKey" : "capital.plan"
}, {
	"id" : 14195,
	"creator" : {
		"id" : 1323,
		"userRoles" : [ ]
	},
	"modifier" : {
		"id" : 1323,
		"userRoles" : [ ]
	},
	"code" : "60F32EC8-D9C5-4F9F-8E28-D450CCA84C56",
	"name" : "60F32EC8-D9C5-4F9F-8E28-D450CCA84C56",
	"type" : "my_apply_auth",
	"status" : "1",
	"createTime" : "2017-04-17T15:50:17",
	"modifyTime" : "2017-04-17T15:50:17",
	"ordinal" : 0,
	"loadType" : "1",
	"propertyC00" : "1323",
	"propertyN00" : 981
} ];


var CURRENT_USER = {
	"id" : 497,
	"company" : {
		"id" : 1,
		"code" : "1000",
		"name" : "总公司(Headquarters)",
		"type" : "C",
		"status" : "1",
		"createTime" : "2016-08-12T17:19:06",
		"modifyTime" : "2017-05-11T00:40:00",
		"syncId" : 5,
		"syncStatus" : "1",
		"approvalAmount" : 0,
		"companyType" : "0"
	},
	"dept" : {
		"id" : 279,
		"code" : "1000060200",
		"name" : "IT系统开发部(IT System Analysis)",
		"type" : "D",
		"status" : "1",
		"createTime" : "2016-08-12T17:19:06",
		"modifyTime" : "2017-05-11T00:40:00",
		"syncId" : 233,
		"syncStatus" : "1",
		"approvalAmount" : 8000,
		"companyType" : "0"
	},
	"code" : "bob.kuang",
	"name" : "况尤波(bob.kuang)",
	"email" : "bob.kuang@libertymutual.com.cn",
	"status" : "1",
	"payeeBank" : "建设银行重庆分行",
	"payeeAccount" : "6227003769000243105",
	"payeeName" : "况尤波",
	"logonMode" : "0",
	"createTime" : "2016-08-12T17:19:08",
	"modifyTime" : "2017-05-11T00:40:03",
	"mobile" : "13098658403",
	"telephone" : "(023)89038737-3739",
	"syncId" : 3653,
	"syncStatus" : "1",
	"emailStatus" : "1",
	"userId" : "bob.kuang",
	"userName" : "况尤波(bob.kuang)",
	"userStatus" : "1",
	"rootMenus" : [ {
		"id" : "budget",
		"name" : "预算管理",
		"status" : "1",
		"type" : "S",
		"namespace" : "/budget",
		"i18nKey" : "menu.budget",
		"children" : [ {
			"id" : "budget.release",
			"name" : "预算手工冲销",
			"status" : "1",
			"type" : "M",
			"module" : "BudgetRelease",
			"options" : {
				"controller" : "BudgetReleaseQueryController",
				"routers" : {
					"budget.release.release" : {
						"url" : "/:id",
						"controller" : "BudgetReleaseController",
						"templateUrl" : "/budget/release/release.html"
					},
					"budget.release.view" : {
						"url" : "/:id/view",
						"controller" : "BudgetReleaseController",
						"templateUrl" : "/budget/release/view.html"
					}
				}
			},
			"namespace" : "/budget/release",
			"i18nKey" : "menu.budget.release",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "budget.release",
				"name" : "手工冲销",
				"status" : "1",
				"permissionScope" : 131071,
				"permissionAction" : "all",
				"uri" : "/budget/release/*",
				"i18nKey" : "budget.release"
			} ],
			"empty" : true
		}, {
			"id" : "budget.adjust",
			"name" : "预算调整",
			"status" : "1",
			"type" : "M",
			"module" : "BudgetAdjust",
			"options" : {
				"params" : {
					"type" : "budget_adjust"
				},
				"routers" : {
					"budget.adjust.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "BudgetAdjustAddController",
								"templateUrl" : "/budget/adjust/edit.html"
							}
						}
					},
					"budget.adjust.edit" : {
						"url" : "/:id/edit",
						"views" : {
							"@" : {
								"controller" : "BudgetAdjustEditController",
								"templateUrl" : "/budget/adjust/edit.html"
							}
						}
					},
					"budget.adjust.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "BudgetAdjustViewController",
								"templateUrl" : "/budget/adjust/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/budget/adjust",
			"i18nKey" : "menu.budget.adjust.list",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "budget.adjust",
				"name" : "预算调整",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/budget/adjust/*",
				"i18nKey" : "budget.adjust"
			} ],
			"empty" : true
		}, {
			"id" : "budget.query",
			"name" : "预算查询",
			"status" : "1",
			"type" : "M",
			"module" : "BudgetQuery",
			"options" : {
				"controller" : "BudgetQueryController",
				"routers" : {
					"budget.query.amount" : {
						"url" : "/amount/:id/:dept/:subject",
						"views" : {
							"@" : {
								"controller" : "BudgetQueryAmountController",
								"templateUrl" : "/budget/query/amount.html"
							}
						}
					},
					"budget.query.amountUsed" : {
						"url" : "/amountUsed/:id/:dept/:subject",
						"views" : {
							"@" : {
								"controller" : "BudgetQueryAmountUsedController",
								"templateUrl" : "/budget/query/amountUsed.html"
							}
						}
					},
					"budget.query.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "BudgetQueryViewController",
								"templateUrl" : "/resources/template/application/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/budget/query",
			"i18nKey" : "menu.budget.query",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "budget.query",
				"name" : "查看",
				"status" : "1",
				"permissionScope" : 65566,
				"permissionAction" : "all",
				"uri" : "/budget/query/*",
				"i18nKey" : "budget.query"
			} ],
			"empty" : true
		} ],
		"menuActions" : [ ],
		"empty" : false
	}, {
		"id" : "advance",
		"name" : "预支管理",
		"status" : "1",
		"type" : "S",
		"namespace" : "/advance",
		"i18nKey" : "menu.advance.root",
		"children" : [ {
			"id" : "advance.advance",
			"name" : "预支申请",
			"status" : "1",
			"type" : "M",
			"module" : "Advance",
			"options" : {
				"params" : {
					"type" : "advance"
				},
				"routers" : {
					"advance.advance.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "AdvanceAddController",
								"templateUrl" : "/advance/advance/edit.html"
							}
						}
					},
					"advance.advance.copy" : {
						"url" : "/:copyId/copy",
						"views" : {
							"@" : {
								"controller" : "AdvanceAddController",
								"templateUrl" : "/advance/advance/edit.html"
							}
						}
					},
					"advance.advance.edit" : {
						"url" : "/:id/edit",
						"views" : {
							"@" : {
								"controller" : "AdvanceEditController",
								"templateUrl" : "/advance/advance/edit.html"
							}
						}
					},
					"advance.advance.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "AdvanceViewController",
								"templateUrl" : "/advance/advance/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/advance/advance",
			"i18nKey" : "menu.advance",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "advance",
				"name" : "预支申请",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/advance/advance/*",
				"i18nKey" : "advance"
			} ],
			"empty" : true
		} ],
		"menuActions" : [ ],
		"empty" : false
	}, {
		"id" : "expense",
		"name" : "报销管理",
		"status" : "1",
		"type" : "S",
		"namespace" : "/expense",
		"i18nKey" : "menu.expense",
		"children" : [ {
			"id" : "expense.accrual",
			"name" : "事前申请",
			"status" : "1",
			"type" : "S",
			"namespace" : "/expense/accrual",
			"i18nKey" : "menu.expense.accrual",
			"children" : [ {
				"id" : "expense.accrual.accrual",
				"name" : "事前申请",
				"status" : "1",
				"type" : "M",
				"module" : "Accrual",
				"options" : {
					"params" : {
						"type" : "accrual_before"
					},
					"deps" : [ "AccrualExpense" ],
					"routers" : {
						"expense.accrual.accrual.add" : {
							"url" : "/add",
							"controller" : "AccrualAddController",
							"templateUrl" : "/expense/accrual/accrual/edit.html"
						},
						"expense.accrual.accrual.copy" : {
							"url" : "/:copyId/copy",
							"controller" : "AccrualAddController",
							"templateUrl" : "/expense/accrual/accrual/edit.html"
						},
						"expense.accrual.accrual.edit" : {
							"url" : "/:id/edit",
							"controller" : "AccrualEditController",
							"templateUrl" : "/expense/accrual/accrual/edit.html"
						},
						"expense.accrual.accrual.expense" : {
							"url" : "/expense",
							"views" : {
								"@" : {
									"controller" : "AccrualExpenseController",
									"templateUrl" : "/expense/accrual/accrual/expense/index.html"
								}
							}
						},
						"expense.accrual.accrual.addExpense" : {
							"url" : "/:id/expense",
							"controller" : "AccrualExpenseAddController",
							"templateUrl" : "/expense/accrual/accrual/expense/edit.html"
						},
						"expense.accrual.accrual.view" : {
							"url" : "/:id",
							"controller" : "AccrualViewController",
							"templateUrl" : "/expense/accrual/accrual/view.html"
						},
						"expense.accrual.accrual.expense.edit" : {
							"url" : "/:id/edit",
							"controller" : "AccrualExpenseEditController",
							"templateUrl" : "/expense/accrual/accrual/expense/edit.html"
						},
						"expense.accrual.accrual.expense.view" : {
							"url" : "/:id",
							"controller" : "AccrualExpenseViewController",
							"templateUrl" : "/expense/accrual/accrual/expense/view.html"
						}
					}
				},
				"namespace" : "/expense/accrual/accrual",
				"i18nKey" : "menu.expense.accrual.before",
				"children" : [ ],
				"menuActions" : [ {
					"id" : "expense.accrual.accrual",
					"name" : "预动支",
					"status" : "1",
					"permissionScope" : 1,
					"permissionAction" : "all",
					"uri" : "/expense/accrual/accrual/**",
					"i18nKey" : "accrual.before"
				} ],
				"empty" : true
			}, {
				"id" : "expense.accrual.accrued",
				"name" : "费用预提",
				"status" : "1",
				"type" : "M",
				"module" : "AccruedExpense",
				"options" : {
					"params" : {
						"type" : "accrued_expense"
					},
					"routers" : {
						"expense.accrual.accrued.add" : {
							"url" : "/add",
							"views" : {
								"@" : {
									"controller" : "AccruedExpenseQueryRelController",
									"templateUrl" : "/expense/accrual/accrued/queryRelation.html"
								}
							}
						},
						"expense.accrual.accrued.add.confirm" : {
							"url" : "/:id",
							"views" : {
								"@" : {
									"controller" : "AccruedExpenseAddController",
									"templateUrl" : "/expense/accrual/accrued/edit.html"
								}
							}
						},
						"expense.accrual.accrued.edit" : {
							"url" : "/:id/edit",
							"views" : {
								"@" : {
									"controller" : "AccruedExpenseEditController",
									"templateUrl" : "/expense/accrual/accrued/edit.html"
								}
							}
						},
						"expense.accrual.accrued.view" : {
							"url" : "/:id",
							"views" : {
								"@" : {
									"controller" : "AccruedExpenseViewController",
									"templateUrl" : "/expense/accrual/accrued/view.html"
								}
							}
						}
					}
				},
				"namespace" : "/expense/accrual/accrued",
				"i18nKey" : "menu.expense.accrual.accrued",
				"children" : [ ],
				"menuActions" : [ {
					"id" : "expense.accrual.accrued",
					"name" : "费用预提",
					"status" : "1",
					"permissionScope" : 131071,
					"permissionAction" : "all",
					"uri" : "/expense/accrual/accrued/**",
					"i18nKey" : "accrual.accrued"
				} ],
				"empty" : true
			}, {
				"id" : "expense.instalment",
				"name" : "分期事前申请",
				"status" : "1",
				"type" : "M",
				"module" : "Instalment",
				"options" : {
					"params" : {
						"type" : "instalment_before"
					},
					"deps" : [ "InstalmentExpense" ],
					"routers" : {
						"expense.instalment.add" : {
							"url" : "/add",
							"controller" : "InstalmentAddController",
							"templateUrl" : "/expense/instalment/edit.html"
						},
						"expense.instalment.copy" : {
							"url" : "/:copyId/copy",
							"controller" : "InstalmentAddController",
							"templateUrl" : "/expense/instalment/edit.html"
						},
						"expense.instalment.edit" : {
							"url" : "/:id/edit",
							"controller" : "InstalmentEditController",
							"templateUrl" : "/expense/instalment/edit.html"
						},
						"expense.instalment.expense" : {
							"url" : "/expense",
							"views" : {
								"@" : {
									"controller" : "InstalmentExpenseController",
									"templateUrl" : "/expense/instalment/expense/index.html"
								}
							}
						},
						"expense.instalment.addExpense" : {
							"url" : "/:id/expense",
							"controller" : "InstalmentExpenseAddController",
							"templateUrl" : "/expense/instalment/expense/edit.html"
						},
						"expense.instalment.view" : {
							"url" : "/:id",
							"controller" : "InstalmentViewController",
							"templateUrl" : "/expense/instalment/view.html"
						},
						"expense.instalment.expense.edit" : {
							"url" : "/:id/edit",
							"controller" : "InstalmentExpenseEditController",
							"templateUrl" : "/expense/instalment/expense/edit.html"
						},
						"expense.instalment.expense.view" : {
							"url" : "/:id",
							"controller" : "InstalmentExpenseViewController",
							"templateUrl" : "/expense/instalment/expense/view.html"
						}
					}
				},
				"namespace" : "/expense/instalment",
				"i18nKey" : "menu.instalment.before",
				"children" : [ ],
				"menuActions" : [ {
					"id" : "expense.instalment",
					"name" : "分期申请/报销",
					"status" : "1",
					"permissionScope" : 1,
					"permissionAction" : "all",
					"uri" : "/expense/instalment/**",
					"i18nKey" : "expense.instalment.before"
				} ],
				"empty" : true
			} ],
			"menuActions" : [ ],
			"empty" : false
		}, {
			"id" : "expense.accrual.plan",
			"name" : "方案签报",
			"status" : "1",
			"type" : "M",
			"module" : "AccrualPlan",
			"options" : {
				"params" : {
					"type" : "accrualPlan_before"
				},
				"deps" : [ "AccrualPlanExpense" ],
				"routers" : {
					"expense.accrual.plan.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "AccrualPlanAddController",
								"templateUrl" : "/expense/accrual/plan/edit.html"
							}
						}
					},
					"expense.accrual.plan.copy" : {
						"url" : "/:copyId/copy",
						"views" : {
							"@" : {
								"controller" : "AccrualPlanAddController",
								"templateUrl" : "/expense/accrual/plan/edit.html"
							}
						}
					},
					"expense.accrual.plan.edit" : {
						"url" : "/:id/edit",
						"views" : {
							"@" : {
								"controller" : "AccrualPlanEditController",
								"templateUrl" : "/expense/accrual/plan/edit.html"
							}
						}
					},
					"expense.accrual.plan.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "AccrualPlanViewController",
								"templateUrl" : "/expense/accrual/plan/view.html"
							}
						}
					},
					"expense.accrual.plan.expense" : {
						"url" : "/expense",
						"views" : {
							"@" : {
								"controller" : "AccrualPlanExpenseController",
								"templateUrl" : "/expense/accrual/plan/expense/"
							}
						}
					},
					"expense.accrual.plan.expense.add" : {
						"url" : "/add/:id",
						"views" : {
							"@" : {
								"controller" : "AccrualPlanExpenseAddController",
								"templateUrl" : "/expense/accrual/plan/expense/edit.html"
							}
						}
					},
					"expense.accrual.plan.expense.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "AccrualPlanExpenseViewController",
								"templateUrl" : "/expense/accrual/plan/expense/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/expense/accrual/plan",
			"i18nKey" : "menu.accrual.plan.before",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "expense.accrual.plan",
				"name" : "方案/框架合同",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/expense/accrual/plan/**",
				"i18nKey" : "accrual.plan"
			} ],
			"empty" : true
		}, {
			"id" : "expense.other",
			"name" : "通用报销",
			"status" : "1",
			"type" : "M",
			"module" : "OtherExpense",
			"options" : {
				"params" : {
					"type" : "expense_other"
				},
				"deps" : [ "AccrualExpense" ],
				"routers" : {
					"expense.other.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "OtherExpenseAddController",
								"templateUrl" : "/expense/other/edit.html"
							}
						}
					},
					"expense.other.edit" : {
						"url" : "/edit/:id",
						"views" : {
							"@" : {
								"controller" : "OtherExpenseEditController",
								"templateUrl" : "/expense/other/edit.html"
							}
						}
					},
					"expense.other.copy" : {
						"url" : "/:copyId/copy",
						"views" : {
							"@" : {
								"controller" : "OtherExpenseAddController",
								"templateUrl" : "/expense/other/edit.html"
							}
						}
					},
					"expense.other.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "OtherExpenseViewController",
								"templateUrl" : "/expense/other/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/expense/other",
			"i18nKey" : "menu.expense.other",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "expense.other",
				"name" : "通用报销",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/expense/other/*",
				"i18nKey" : "app.edit"
			} ],
			"empty" : true
		}, {
			"id" : "expense.phoneBills",
			"name" : "电话费报销",
			"status" : "1",
			"type" : "M",
			"module" : "PhoneBillsExpense",
			"options" : {
				"params" : {
					"type" : "expense_phoneBills"
				},
				"deps" : [ "AccrualExpense" ],
				"routers" : {
					"expense.phoneBills.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "PhoneBillsExpenseAddController",
								"templateUrl" : "/expense/phoneBills/edit.html"
							}
						}
					},
					"expense.phoneBills.edit" : {
						"url" : "/edit/:id",
						"views" : {
							"@" : {
								"controller" : "PhoneBillsExpenseEditController",
								"templateUrl" : "/expense/phoneBills/edit.html"
							}
						}
					},
					"expense.phoneBills.copy" : {
						"url" : "/:copyId/copy",
						"views" : {
							"@" : {
								"controller" : "PhoneBillsExpenseAddController",
								"templateUrl" : "/expense/phoneBills/edit.html"
							}
						}
					},
					"expense.phoneBills.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "PhoneBillsExpenseViewController",
								"templateUrl" : "/expense/phoneBills/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/expense/phoneBills",
			"i18nKey" : "menu.expense.phoneBills",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "expense.phoneBills",
				"name" : "电话费报销",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/expense/phoneBills/*",
				"i18nKey" : "app.edit"
			} ],
			"empty" : true
		}, {
			"id" : "expense.hospitality",
			"name" : "招待费报销",
			"status" : "1",
			"type" : "M",
			"module" : "HospitalityExpense",
			"options" : {
				"params" : {
					"type" : "expense_hospitality"
				},
				"deps" : [ "AccrualExpense" ],
				"routers" : {
					"expense.hospitality.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "HospitalityExpenseAddController",
								"templateUrl" : "/expense/hospitality/edit.html"
							}
						}
					},
					"expense.hospitality.copy" : {
						"url" : "/:copyId/copy",
						"views" : {
							"@" : {
								"controller" : "HospitalityExpenseAddController",
								"templateUrl" : "/expense/hospitality/edit.html"
							}
						}
					},
					"expense.hospitality.edit" : {
						"url" : "/edit/:id",
						"views" : {
							"@" : {
								"controller" : "HospitalityExpenseEditController",
								"templateUrl" : "/expense/hospitality/edit.html"
							}
						}
					},
					"expense.hospitality.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "HospitalityExpenseViewController",
								"templateUrl" : "/expense/hospitality/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/expense/hospitality",
			"i18nKey" : "menu.expense.hospitality",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "expense.hospitality",
				"name" : "招待费报销",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/expense/hospitality/*",
				"i18nKey" : "app.edit"
			} ],
			"empty" : true
		}, {
			"id" : "expense.travel",
			"name" : "差旅费报销",
			"status" : "1",
			"type" : "M",
			"module" : "TravelExpense",
			"options" : {
				"params" : {
					"type" : "expense_travel"
				},
				"deps" : [ "AccrualExpense" ],
				"routers" : {
					"expense.travel.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "TravelExpenseAddController",
								"templateUrl" : "/expense/travel/edit.html"
							}
						}
					},
					"expense.travel.edit" : {
						"url" : "/edit/:id",
						"views" : {
							"@" : {
								"controller" : "TravelExpenseEditController",
								"templateUrl" : "/expense/travel/edit.html"
							}
						}
					},
					"expense.travel.copy" : {
						"url" : "/:copyId/copy",
						"views" : {
							"@" : {
								"controller" : "TravelExpenseAddController",
								"templateUrl" : "/expense/travel/edit.html"
							}
						}
					},
					"expense.travel.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "TravelExpenseViewController",
								"templateUrl" : "/expense/travel/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/expense/travel",
			"i18nKey" : "menu.expense.travel",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "expense.travel",
				"name" : "差旅费报销",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/expense/travel/*",
				"i18nKey" : "app.edit"
			} ],
			"empty" : true
		}, {
			"id" : "expense.vehicle",
			"name" : "车辆报销",
			"status" : "1",
			"type" : "M",
			"module" : "Vehicle",
			"options" : {
				"params" : {
					"type" : "expense_vehicle"
				},
				"deps" : [ "AccrualExpense" ],
				"routers" : {
					"expense.vehicle.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "VehicleAddController",
								"templateUrl" : "/expense/vehicle/edit.html"
							}
						}
					},
					"expense.vehicle.edit" : {
						"url" : "/edit/:id",
						"views" : {
							"@" : {
								"controller" : "VehicleEditController",
								"templateUrl" : "/expense/vehicle/edit.html"
							}
						}
					},
					"expense.vehicle.copy" : {
						"url" : "/:copyId/copy",
						"views" : {
							"@" : {
								"controller" : "VehicleAddController",
								"templateUrl" : "/expense/vehicle/edit.html"
							}
						}
					},
					"expense.vehicle.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "VehicleViewController",
								"templateUrl" : "/expense/vehicle/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/expense/vehicle",
			"i18nKey" : "menu.expense.vehicle",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "expense.vehicle",
				"name" : "车辆报销",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/expense/vehicle/*",
				"i18nKey" : "app.edit"
			} ],
			"empty" : true
		}, {
			"id" : "expense.relation",
			"name" : "中国为关联公司代垫",
			"status" : "1",
			"type" : "M",
			"module" : "RelationExpense",
			"options" : {
				"params" : {
					"type" : "expense_relation"
				},
				"deps" : [ "AccrualExpense" ],
				"routers" : {
					"expense.relation.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "RelationExpenseAddController",
								"templateUrl" : "/expense/relation/edit.html"
							}
						}
					},
					"expense.relation.edit" : {
						"url" : "/edit/:id",
						"views" : {
							"@" : {
								"controller" : "RelationExpenseEditController",
								"templateUrl" : "/expense/relation/edit.html"
							}
						}
					},
					"expense.relation.copy" : {
						"url" : "/:copyId/copy",
						"views" : {
							"@" : {
								"controller" : "RelationExpenseAddController",
								"templateUrl" : "/expense/relation/edit.html"
							}
						}
					},
					"expense.relation.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "RelationExpenseViewController",
								"templateUrl" : "/expense/relation/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/expense/relation",
			"i18nKey" : "menu.expense.relation",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "expense.relation",
				"name" : "中国为关联公司代垫",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/expense/relation/*",
				"i18nKey" : "app.edit"
			} ],
			"empty" : true
		} ],
		"menuActions" : [ ],
		"empty" : false
	}, {
		"id" : "contract",
		"name" : "合同管理",
		"status" : "1",
		"type" : "S",
		"namespace" : "/contract",
		"i18nKey" : "menu.contract",
		"children" : [ {
			"id" : "contract.gave",
			"name" : "合同授权",
			"status" : "1",
			"type" : "M",
			"module" : "ContractGave",
			"options" : {
				"controller" : "ContractGaveController",
				"routers" : {
					"contract.gave.view" : {
						"url" : "/view/:id",
						"views" : {
							"@" : {
								"controller" : "ContractGaveViewController",
								"templateUrl" : "/contract/gave/application.html"
							}
						}
					}
				}
			},
			"namespace" : "/contract/gave",
			"i18nKey" : "contract.gave",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "contract.gave",
				"name" : "合同授权",
				"status" : "1",
				"permissionScope" : 131071,
				"permissionAction" : "all",
				"uri" : "/contract/gave/*",
				"i18nKey" : "contract.gave"
			} ],
			"empty" : true
		}, {
			"id" : "contract.expense",
			"name" : "费用类合同",
			"status" : "1",
			"type" : "M",
			"module" : "ContractExpense",
			"options" : {
				"params" : {
					"type" : "contract_expense"
				},
				"routers" : {
					"contract.expense.add" : {
						"url" : "/add/:id",
						"views" : {
							"@" : {
								"controller" : "ContractExpenseAddController",
								"templateUrl" : "/contract/expense/edit.html"
							}
						}
					},
					"contract.expense.copy" : {
						"url" : "/:copyId/copy",
						"views" : {
							"@" : {
								"controller" : "ContractExpenseAddController",
								"templateUrl" : "/contract/expense/edit.html"
							}
						}
					},
					"contract.expense.edit" : {
						"url" : "/edit/:id",
						"views" : {
							"@" : {
								"controller" : "ContractExpenseEditController",
								"templateUrl" : "/contract/expense/edit.html"
							}
						}
					},
					"contract.expense.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "ContractExpenseViewController",
								"templateUrl" : "/contract/expense/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/contract/expense",
			"i18nKey" : "menu.contract.expense",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "contract.expense",
				"name" : "费用类合同",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/contract/expense/*",
				"i18nKey" : "contract.expense"
			} ],
			"empty" : true
		}, {
			"id" : "contract.nonexpense",
			"name" : "业务类合同",
			"status" : "1",
			"type" : "M",
			"module" : "ContractNonexpense",
			"options" : {
				"params" : {
					"type" : "contract_nonexpense"
				},
				"routers" : {
					"contract.nonexpense.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "ContractNonexpenseAddController",
								"templateUrl" : "/contract/nonexpense/edit.html"
							}
						}
					},
					"contract.nonexpense.edit" : {
						"url" : "/edit/:id",
						"views" : {
							"@" : {
								"controller" : "ContractNonexpenseEditController",
								"templateUrl" : "/contract/nonexpense/edit.html"
							}
						}
					},
					"contract.nonexpense.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "ContractNonexpenseViewController",
								"templateUrl" : "/contract/nonexpense/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/contract/nonexpense",
			"i18nKey" : "menu.contract.nonexpense",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "contract.nonexpense",
				"name" : "非费用类合同审批",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/contract/nonexpense/*",
				"i18nKey" : "contract.nonexpense"
			} ],
			"empty" : true
		} ],
		"menuActions" : [ ],
		"empty" : false
	}, {
		"id" : "purchase",
		"name" : "采购管理",
		"status" : "1",
		"type" : "S",
		"namespace" : "/purchase",
		"i18nKey" : "menu.purchase",
		"children" : [ {
			"id" : "purchase.request",
			"name" : "采购申请",
			"status" : "1",
			"type" : "M",
			"module" : "PurchaseRequest",
			"options" : {
				"params" : {
					"type" : "purchase_request"
				},
				"routers" : {
					"purchase.request.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "PurchaseRequestAddController",
								"templateUrl" : "/purchase/request/edit.html"
							}
						}
					},
					"purchase.request.edit" : {
						"url" : "/:id/edit",
						"views" : {
							"@" : {
								"controller" : "PurchaseRequestEditController",
								"templateUrl" : "/purchase/request/edit.html"
							}
						}
					},
					"purchase.request.copy" : {
						"url" : "/:copyId/copy",
						"views" : {
							"@" : {
								"controller" : "PurchaseRequestAddController",
								"templateUrl" : "/purchase/request/edit.html"
							}
						}
					},
					"purchase.request.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "PurchaseRequestViewController",
								"templateUrl" : "/purchase/request/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/purchase/request",
			"i18nKey" : "menu.purchase.request",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "purchase.request",
				"name" : "采购需求申请",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/purchase/request/*",
				"i18nKey" : "purchase.request"
			} ],
			"empty" : true
		}, {
			"id" : "purchase.accrual",
			"name" : "采购事前申请-非在建工程",
			"status" : "1",
			"type" : "M",
			"module" : "PurchaseAccrual",
			"options" : {
				"params" : {
					"type" : "purchase_accrual"
				},
				"routers" : {
					"purchase.accrual.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "PurchaseAccrualQueryRelController",
								"templateUrl" : "/purchase/accrual/queryRelation.html"
							}
						}
					},
					"purchase.accrual.add.confirm" : {
						"url" : "/confirm",
						"controller" : "PurchaseAccrualAddController",
						"templateUrl" : "/purchase/accrual/edit.html"
					},
					"purchase.accrual.edit" : {
						"url" : "/:id/edit",
						"views" : {
							"@" : {
								"controller" : "PurchaseAccrualEditController",
								"templateUrl" : "/purchase/accrual/edit.html"
							}
						}
					},
					"purchase.accrual.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "PurchaseAccrualViewController",
								"templateUrl" : "/purchase/accrual/view.html"
							}
						}
					},
					"purchase.accrual.accept" : {
						"url" : "/:id/accept",
						"views" : {
							"@" : {
								"controller" : "PurchaseAccrualAcceptController",
								"templateUrl" : "/purchase/accrual/edit.html"
							}
						}
					}
				}
			},
			"namespace" : "/purchase/accrual",
			"i18nKey" : "menu.purchase.accrual",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "purchase.accrual",
				"name" : "采购事前申请",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/purchase/accrual/*",
				"i18nKey" : "purchase.accrual"
			} ],
			"empty" : true
		}, {
			"id" : "purchase.accrualBuilding",
			"name" : "采购事前申请-在建工程",
			"status" : "1",
			"type" : "M",
			"module" : "PurchaseAccrualBuilding",
			"options" : {
				"params" : {
					"type" : "purchase_accrualBuilding"
				},
				"routers" : {
					"purchase.accrualBuilding.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "PurchaseAccrualBuildingQueryRelController",
								"templateUrl" : "/purchase/accrualBuilding/queryRelation.html"
							}
						}
					},
					"purchase.accrualBuilding.add.confirm" : {
						"url" : "/confirm",
						"controller" : "PurchaseAccrualBuildingAddController",
						"templateUrl" : "/purchase/accrualBuilding/edit.html"
					},
					"purchase.accrualBuilding.edit" : {
						"url" : "/edit/:id",
						"views" : {
							"@" : {
								"controller" : "PurchaseAccrualBuildingEditController",
								"templateUrl" : "/purchase/accrualBuilding/edit.html"
							}
						}
					},
					"purchase.accrualBuilding.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "PurchaseAccrualBuildingViewController",
								"templateUrl" : "/purchase/accrualBuilding/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/purchase/accrualBuilding",
			"i18nKey" : "menu.purchase.accrualBuilding",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "purchase.accrualBuilding",
				"name" : "采购事前申请-在建工程",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/purchase/accrualBuilding/*",
				"i18nKey" : "purchase.accrualBuilding"
			} ],
			"empty" : true
		}, {
			"id" : "purchase.accepConfir",
			"name" : "采购验收确认",
			"status" : "1",
			"type" : "M",
			"module" : "PurchaseAccepConfir",
			"options" : {
				"routers" : {
					"purchase.accepConfir.confirm" : {
						"url" : "/confirm/:id/:taskId",
						"views" : {
							"@" : {
								"controller" : "PurchaseAccepConfirEditController",
								"templateUrl" : "/purchase/accepConfir/edit.html"
							}
						}
					}
				}
			},
			"namespace" : "/purchase/accepConfir",
			"i18nKey" : "menu.purchase.accepConfir",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "purchase.accepConfir",
				"name" : "采购验收确认",
				"status" : "1",
				"permissionScope" : 65536,
				"permissionAction" : "all",
				"uri" : "/purchase/accepConfir/*",
				"i18nKey" : "purchase.accepConfir"
			} ],
			"empty" : true
		}, {
			"id" : "purchase.transferSolid",
			"name" : "在建工程转固",
			"status" : "1",
			"type" : "M",
			"module" : "PurchaseTransferSolid",
			"options" : {
				"params" : {
					"type" : "purchase_transferSolid"
				},
				"routers" : {
					"purchase.transferSolid.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "PurchaseTransferSolidAddController",
								"templateUrl" : "/purchase/transferSolid/edit.html"
							}
						}
					},
					"purchase.transferSolid.edit" : {
						"url" : "/:id/edit",
						"views" : {
							"@" : {
								"controller" : "PurchaseTransferSolidEditController",
								"templateUrl" : "/purchase/transferSolid/edit.html"
							}
						}
					},
					"purchase.transferSolid.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "PurchaseTransferSolidViewController",
								"templateUrl" : "/purchase/transferSolid/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/purchase/transferSolid",
			"i18nKey" : "menu.purchase.transferSolid",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "purchase.transferSolid",
				"name" : "在建工程转固",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/purchase/transferSolid/*",
				"i18nKey" : "purchase.transferSolid"
			} ],
			"empty" : true
		}, {
			"id" : "purchase.issue",
			"name" : "库存发放",
			"status" : "1",
			"type" : "M",
			"module" : "PurchaseIssue",
			"options" : {
				"routers" : {
					"purchase.issue.edit" : {
						"url" : "/edit/:id",
						"controller" : "PurchaseIssueEditController",
						"templateUrl" : "/purchase/issue/edit.html"
					},
					"purchase.issue.view" : {
						"url" : "/:id",
						"controller" : "PurchaseIssueViewController",
						"templateUrl" : "/purchase/issue/view.html"
					}
				}
			},
			"namespace" : "/purchase/issue",
			"i18nKey" : "menu.purchase.issue",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "purchase.issue",
				"name" : "库存发放",
				"status" : "1",
				"permissionScope" : 65536,
				"permissionAction" : "all",
				"uri" : "/purchase/issue/*",
				"i18nKey" : "purchase.issue"
			} ],
			"empty" : true
		}, {
			"id" : "purchase.expense",
			"name" : "资金结算",
			"status" : "1",
			"type" : "M",
			"module" : "PurchaseExpense",
			"options" : {
				"params" : {
					"type" : "purchase_expense"
				},
				"routers" : {
					"purchase.expense.add" : {
						"url" : "/add/:ids",
						"views" : {
							"@" : {
								"controller" : "PurchaseExpenseAddController",
								"templateUrl" : "/purchase/expense/edit-bridge.html"
							}
						}
					},
					"purchase.expense.edit" : {
						"url" : "/edit/:id",
						"views" : {
							"@" : {
								"controller" : "PurchaseExpenseEditController",
								"templateUrl" : "/purchase/expense/edit.html"
							}
						}
					},
					"purchase.expense.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "PurchaseExpenseViewController",
								"templateUrl" : "/purchase/expense/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/purchase/expense",
			"i18nKey" : "menu.purchase.expense",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "purchase.expense",
				"name" : "资金结算",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/purchase/expense/*",
				"i18nKey" : "purchase.expense"
			} ],
			"empty" : true
		}, {
			"id" : "asset.allocation",
			"name" : "资产调拨",
			"status" : "1",
			"type" : "M",
			"module" : "AssetAllocation",
			"options" : {
				"params" : {
					"type" : "asset_allocation"
				},
				"deps" : [ "AssetAllocation" ],
				"routers" : {
					"expense.assetAllocation.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "AssetAllocationAddController",
								"templateUrl" : "/expense/assetAllocation/edit.html"
							}
						}
					},
					"expense.assetAllocation.edit" : {
						"url" : "/edit/:id",
						"views" : {
							"@" : {
								"controller" : "AssetAllocationEditController",
								"templateUrl" : "/expense/assetAllocation/edit.html"
							}
						}
					},
					"expense.assetAllocation.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "AssetAllocationViewController",
								"templateUrl" : "/expense/assetAllocation/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/expense/assetAllocation",
			"i18nKey" : "menu.asset.allocation",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "asset.allocation",
				"name" : "资产调拨",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/expense/assetAllocation/*",
				"i18nKey" : "app.edit"
			} ],
			"empty" : true
		}, {
			"id" : "asset.disposal",
			"name" : "资产处理",
			"status" : "1",
			"type" : "M",
			"module" : "AssetDisposal",
			"options" : {
				"params" : {
					"type" : "asset_disposal"
				},
				"deps" : [ "AssetDisposal" ],
				"routers" : {
					"expense.assetDisposal.add" : {
						"url" : "/add",
						"views" : {
							"@" : {
								"controller" : "AssetDisposalAddController",
								"templateUrl" : "/expense/assetDisposal/edit.html"
							}
						}
					},
					"expense.assetDisposal.edit" : {
						"url" : "/edit/:id",
						"views" : {
							"@" : {
								"controller" : "AssetDisposalEditController",
								"templateUrl" : "/expense/assetDisposal/edit.html"
							}
						}
					},
					"expense.assetDisposal.view" : {
						"url" : "/:id",
						"views" : {
							"@" : {
								"controller" : "AssetDisposalViewController",
								"templateUrl" : "/expense/assetDisposal/view.html"
							}
						}
					}
				}
			},
			"namespace" : "/expense/assetDisposal",
			"i18nKey" : "menu.asset.disposal",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "asset.disposal",
				"name" : "资产处理",
				"status" : "1",
				"permissionScope" : 1,
				"permissionAction" : "all",
				"uri" : "/expense/assetDisposal/*",
				"i18nKey" : "app.edit"
			} ],
			"empty" : true
		}, {
			"id" : "setting.purchaseDetail",
			"name" : "采购明细",
			"status" : "1",
			"type" : "M",
			"module" : "SettingSpecific",
			"options" : {
				"params" : {
					"type" : "purchaseDetail"
				},
				"routers" : {
					"setting.purchaseDetail.add" : {
						"url" : "/add",
						"controller" : "SettingSpecificAddController",
						"templateUrl" : "/setting/purchaseDetail/edit.html"
					},
					"setting.purchaseDetail.edit" : {
						"url" : "/:id/edit",
						"controller" : "SettingSpecificEditController",
						"templateUrl" : "/setting/purchaseDetail/edit.html"
					},
					"setting.purchaseDetail.view" : {
						"url" : "/:id",
						"controller" : "SettingSpecificViewController",
						"templateUrl" : "/setting/purchaseDetail/view.html"
					}
				}
			},
			"namespace" : "/setting/purchaseDetail",
			"i18nKey" : "menu.setting.purchaseDetail",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "setting.purchaseDetail.edit",
				"name" : "编辑",
				"status" : "1",
				"permissionScope" : 65536,
				"permissionAction" : "edit",
				"uri" : "/setting/purchaseDetail/save.do,/setting/purchaseDetail/remove.do",
				"i18nKey" : "app.edit"
			} ],
			"empty" : true
		}, {
			"id" : "setting.purchasePack",
			"name" : "采购包",
			"status" : "1",
			"type" : "M",
			"module" : "Dictionary",
			"options" : {
				"params" : {
					"type" : "purchasePack"
				}
			},
			"namespace" : "/setting/purchasePack",
			"i18nKey" : "menu.setting.purchasePack",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "setting.purchasePack.edit",
				"name" : "编辑",
				"status" : "1",
				"permissionScope" : 65536,
				"permissionAction" : "edit",
				"uri" : "/setting/purchasePack/save.do,/setting/purchasePack/update.do,/setting/purchasePack/remove.do",
				"i18nKey" : "app.edit"
			} ],
			"empty" : true
		} ],
		"menuActions" : [ ],
		"empty" : false
	}, {
		"id" : "query",
		"name" : "综合查询",
		"status" : "1",
		"type" : "M",
		"module" : "Query",
		"options" : {
			"routers" : {
				"query.view" : {
					"url" : "/:id",
					"views" : {
						"@" : {
							"controller" : "QueryViewController",
							"templateUrl" : "/resources/template/application/view.html"
						}
					}
				}
			}
		},
		"namespace" : "/query",
		"i18nKey" : "menu.query",
		"children" : [ ],
		"menuActions" : [ {
			"id" : "query",
			"name" : "查询",
			"status" : "1",
			"permissionScope" : 131071,
			"permissionAction" : "query",
			"uri" : "/query/*",
			"i18nKey" : "query"
		} ],
		"empty" : true
	}, {
		"id" : "supplier",
		"name" : "供应商管理",
		"status" : "1",
		"type" : "S",
		"namespace" : "/supplier",
		"i18nKey" : "menu.supplier",
		"children" : [ {
			"id" : "supplier.manage",
			"name" : "供应商管理",
			"status" : "1",
			"type" : "M",
			"module" : "Supplier",
			"options" : {
				"params" : {
					"type" : "supplierManage"
				}
			},
			"namespace" : "/supplier/manage",
			"i18nKey" : "menu.supplier.manage",
			"children" : [ ],
			"menuActions" : [ {
				"id" : "supplier.manage.edit",
				"name" : "编辑",
				"status" : "1",
				"permissionScope" : 65536,
				"permissionAction" : "edit",
				"uri" : "/supplier/manage/save.do,/supplier/manage/remove.do",
				"i18nKey" : "app.edit"
			} ],
			"empty" : true
		} ],
		"menuActions" : [ ],
		"empty" : false
	} ],
	"depts" : [ {
		"id" : 279,
		"code" : "1000060200",
		"name" : "IT系统开发部(IT System Analysis)",
		"type" : "D",
		"status" : "1",
		"createTime" : "2016-08-12T17:19:06",
		"modifyTime" : "2017-05-11T00:40:00",
		"syncId" : 233,
		"syncStatus" : "1",
		"approvalAmount" : 8000,
		"companyType" : "0"
	} ],
	"deptIds" : [ 279 ],
	"companies" : [ {
		"id" : 1,
		"code" : "1000",
		"name" : "总公司(Headquarters)",
		"type" : "C",
		"status" : "1",
		"createTime" : "2016-08-12T17:19:06",
		"modifyTime" : "2017-05-11T00:40:00",
		"syncId" : 5,
		"syncStatus" : "1",
		"approvalAmount" : 0,
		"companyType" : "0"
	} ],
	"companyIds" : [ 1 ],
	"roles" : [ {
		"id" : "purchasing-user",
		"name" : "采购员",
		"logs" : [ ],
		"dept" : {
			"id" : 279,
			"code" : "1000060200",
			"name" : "IT系统开发部(IT System Analysis)",
			"type" : "D",
			"status" : "1",
			"createTime" : "2016-08-12T17:19:06",
			"modifyTime" : "2017-05-11T00:40:00",
			"syncId" : 233,
			"syncStatus" : "1",
			"approvalAmount" : 8000,
			"companyType" : "0"
		},
		"company" : {
			"id" : 1,
			"code" : "1000",
			"name" : "总公司(Headquarters)",
			"type" : "C",
			"status" : "1",
			"createTime" : "2016-08-12T17:19:06",
			"modifyTime" : "2017-05-11T00:40:00",
			"syncId" : 5,
			"syncStatus" : "1",
			"approvalAmount" : 0,
			"companyType" : "0"
		}
	}, {
		"id" : "user",
		"name" : "普通员工",
		"logs" : [ ],
		"dept" : {
			"id" : 279,
			"code" : "1000060200",
			"name" : "IT系统开发部(IT System Analysis)",
			"type" : "D",
			"status" : "1",
			"createTime" : "2016-08-12T17:19:06",
			"modifyTime" : "2017-05-11T00:40:00",
			"syncId" : 233,
			"syncStatus" : "1",
			"approvalAmount" : 8000,
			"companyType" : "0"
		},
		"company" : {
			"id" : 1,
			"code" : "1000",
			"name" : "总公司(Headquarters)",
			"type" : "C",
			"status" : "1",
			"createTime" : "2016-08-12T17:19:06",
			"modifyTime" : "2017-05-11T00:40:00",
			"syncId" : 5,
			"syncStatus" : "1",
			"approvalAmount" : 0,
			"companyType" : "0"
		}
	} ],
	"permissions" : [ {
		"id" : 23885,
		"menu" : {
			"id" : "advance",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23771,
		"menu" : {
			"id" : "advance.advance",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "advance",
			"permissionScope" : 0,
			"uri" : "/advance/advance/*"
		},
		"lv" : 1,
		"uri" : "/advance/advance/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23770,
		"menu" : {
			"id" : "advance.advance",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23931,
		"menu" : {
			"id" : "asset.allocation",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "asset.allocation",
			"permissionScope" : 0,
			"uri" : "/expense/assetAllocation/*"
		},
		"lv" : 1,
		"uri" : "/expense/assetAllocation/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23930,
		"menu" : {
			"id" : "asset.allocation",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23933,
		"menu" : {
			"id" : "asset.disposal",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "asset.disposal",
			"permissionScope" : 0,
			"uri" : "/expense/assetDisposal/*"
		},
		"lv" : 1,
		"uri" : "/expense/assetDisposal/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23932,
		"menu" : {
			"id" : "asset.disposal",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23878,
		"menu" : {
			"id" : "budget",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23882,
		"menu" : {
			"id" : "budget.adjust",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "budget.adjust",
			"permissionScope" : 0,
			"uri" : "/budget/adjust/*"
		},
		"lv" : 1,
		"uri" : "/budget/adjust/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23881,
		"menu" : {
			"id" : "budget.adjust",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23884,
		"menu" : {
			"id" : "budget.query",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "budget.query",
			"permissionScope" : 0,
			"uri" : "/budget/query/*"
		},
		"lv" : 6,
		"uri" : "/budget/query/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23883,
		"menu" : {
			"id" : "budget.query",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23766,
		"menu" : {
			"id" : "budget.release",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "budget.release",
			"permissionScope" : 0,
			"uri" : "/budget/release/*"
		},
		"lv" : 1,
		"uri" : "/budget/release/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23879,
		"menu" : {
			"id" : "budget.release",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23794,
		"menu" : {
			"id" : "contract",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23912,
		"menu" : {
			"id" : "contract.expense",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "contract.expense",
			"permissionScope" : 0,
			"uri" : "/contract/expense/*"
		},
		"lv" : 1,
		"uri" : "/contract/expense/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23797,
		"menu" : {
			"id" : "contract.expense",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23910,
		"menu" : {
			"id" : "contract.gave",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "contract.gave",
			"permissionScope" : 0,
			"uri" : "/contract/gave/*"
		},
		"lv" : 1,
		"uri" : "/contract/gave/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23909,
		"menu" : {
			"id" : "contract.gave",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23800,
		"menu" : {
			"id" : "contract.nonexpense",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "contract.nonexpense",
			"permissionScope" : 0,
			"uri" : "/contract/nonexpense/*"
		},
		"lv" : 1,
		"uri" : "/contract/nonexpense/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23913,
		"menu" : {
			"id" : "contract.nonexpense",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23772,
		"menu" : {
			"id" : "expense",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23773,
		"menu" : {
			"id" : "expense.accrual",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23891,
		"menu" : {
			"id" : "expense.accrual.accrual",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "expense.accrual.accrual",
			"permissionScope" : 0,
			"uri" : "/expense/accrual/accrual/**"
		},
		"lv" : 1,
		"uri" : "/expense/accrual/accrual/**",
		"min" : false,
		"max" : false
	}, {
		"id" : 23774,
		"menu" : {
			"id" : "expense.accrual.accrual",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23893,
		"menu" : {
			"id" : "expense.accrual.accrued",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "expense.accrual.accrued",
			"permissionScope" : 0,
			"uri" : "/expense/accrual/accrued/**"
		},
		"lv" : 7,
		"uri" : "/expense/accrual/accrued/**",
		"min" : false,
		"max" : false
	}, {
		"id" : 23776,
		"menu" : {
			"id" : "expense.accrual.accrued",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23781,
		"menu" : {
			"id" : "expense.accrual.plan",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "expense.accrual.plan",
			"permissionScope" : 0,
			"uri" : "/expense/accrual/plan/**"
		},
		"lv" : 1,
		"uri" : "/expense/accrual/plan/**",
		"min" : false,
		"max" : false
	}, {
		"id" : 23780,
		"menu" : {
			"id" : "expense.accrual.plan",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23903,
		"menu" : {
			"id" : "expense.hospitality",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "expense.hospitality",
			"permissionScope" : 0,
			"uri" : "/expense/hospitality/*"
		},
		"lv" : 1,
		"uri" : "/expense/hospitality/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23902,
		"menu" : {
			"id" : "expense.hospitality",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23895,
		"menu" : {
			"id" : "expense.instalment",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "expense.instalment",
			"permissionScope" : 0,
			"uri" : "/expense/instalment/**"
		},
		"lv" : 1,
		"uri" : "/expense/instalment/**",
		"min" : false,
		"max" : false
	}, {
		"id" : 23894,
		"menu" : {
			"id" : "expense.instalment",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23899,
		"menu" : {
			"id" : "expense.other",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "expense.other",
			"permissionScope" : 0,
			"uri" : "/expense/other/*"
		},
		"lv" : 1,
		"uri" : "/expense/other/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23898,
		"menu" : {
			"id" : "expense.other",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23785,
		"menu" : {
			"id" : "expense.phoneBills",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "expense.phoneBills",
			"permissionScope" : 0,
			"uri" : "/expense/phoneBills/*"
		},
		"lv" : 1,
		"uri" : "/expense/phoneBills/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23784,
		"menu" : {
			"id" : "expense.phoneBills",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23793,
		"menu" : {
			"id" : "expense.relation",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "expense.relation",
			"permissionScope" : 0,
			"uri" : "/expense/relation/*"
		},
		"lv" : 1,
		"uri" : "/expense/relation/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23792,
		"menu" : {
			"id" : "expense.relation",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23789,
		"menu" : {
			"id" : "expense.travel",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "expense.travel",
			"permissionScope" : 0,
			"uri" : "/expense/travel/*"
		},
		"lv" : 1,
		"uri" : "/expense/travel/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23788,
		"menu" : {
			"id" : "expense.travel",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23791,
		"menu" : {
			"id" : "expense.vehicle",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "expense.vehicle",
			"permissionScope" : 0,
			"uri" : "/expense/vehicle/*"
		},
		"lv" : 1,
		"uri" : "/expense/vehicle/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23790,
		"menu" : {
			"id" : "expense.vehicle",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23915,
		"menu" : {
			"id" : "purchase",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23923,
		"menu" : {
			"id" : "purchase.accepConfir",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "purchase.accepConfir",
			"permissionScope" : 0,
			"uri" : "/purchase/accepConfir/*"
		},
		"lv" : 65536,
		"uri" : "/purchase/accepConfir/*",
		"min" : false,
		"max" : true
	}, {
		"id" : 23804,
		"menu" : {
			"id" : "purchase.accepConfir",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23919,
		"menu" : {
			"id" : "purchase.accrual",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "purchase.accrual",
			"permissionScope" : 0,
			"uri" : "/purchase/accrual/*"
		},
		"lv" : 1,
		"uri" : "/purchase/accrual/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23918,
		"menu" : {
			"id" : "purchase.accrual",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23921,
		"menu" : {
			"id" : "purchase.accrualBuilding",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "purchase.accrualBuilding",
			"permissionScope" : 0,
			"uri" : "/purchase/accrualBuilding/*"
		},
		"lv" : 1,
		"uri" : "/purchase/accrualBuilding/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23920,
		"menu" : {
			"id" : "purchase.accrualBuilding",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23929,
		"menu" : {
			"id" : "purchase.expense",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "purchase.expense",
			"permissionScope" : 0,
			"uri" : "/purchase/expense/*"
		},
		"lv" : 1,
		"uri" : "/purchase/expense/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23928,
		"menu" : {
			"id" : "purchase.expense",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23927,
		"menu" : {
			"id" : "purchase.issue",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "purchase.issue",
			"permissionScope" : 0,
			"uri" : "/purchase/issue/*"
		},
		"lv" : 65536,
		"uri" : "/purchase/issue/*",
		"min" : false,
		"max" : true
	}, {
		"id" : 23926,
		"menu" : {
			"id" : "purchase.issue",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23917,
		"menu" : {
			"id" : "purchase.request",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "purchase.request",
			"permissionScope" : 0,
			"uri" : "/purchase/request/*"
		},
		"lv" : 1,
		"uri" : "/purchase/request/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23802,
		"menu" : {
			"id" : "purchase.request",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23925,
		"menu" : {
			"id" : "purchase.transferSolid",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "purchase.transferSolid",
			"permissionScope" : 0,
			"uri" : "/purchase/transferSolid/*"
		},
		"lv" : 1,
		"uri" : "/purchase/transferSolid/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23924,
		"menu" : {
			"id" : "purchase.transferSolid",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23807,
		"menu" : {
			"id" : "query",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "query",
			"permissionScope" : 0,
			"uri" : "/query/*"
		},
		"lv" : 1,
		"uri" : "/query/*",
		"min" : false,
		"max" : false
	}, {
		"id" : 23806,
		"menu" : {
			"id" : "query",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23936,
		"menu" : {
			"id" : "setting.purchaseDetail",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "setting.purchaseDetail.edit",
			"permissionScope" : 0,
			"uri" : "/setting/purchaseDetail/save.do,/setting/purchaseDetail/remove.do"
		},
		"lv" : 65536,
		"uri" : "/setting/purchaseDetail/save.do,/setting/purchaseDetail/remove.do",
		"min" : false,
		"max" : true
	}, {
		"id" : 23935,
		"menu" : {
			"id" : "setting.purchaseDetail",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "setting.purchaseDetail.query",
			"permissionScope" : 0,
			"uri" : "/setting/purchaseDetail/query.do,/setting/purchaseDetail/update.do,/setting/purchaseDetail/get.do"
		},
		"lv" : 65536,
		"uri" : "/setting/purchaseDetail/query.do,/setting/purchaseDetail/update.do,/setting/purchaseDetail/get.do",
		"min" : false,
		"max" : true
	}, {
		"id" : 23934,
		"menu" : {
			"id" : "setting.purchaseDetail",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23939,
		"menu" : {
			"id" : "setting.purchasePack",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "setting.purchasePack.edit",
			"permissionScope" : 0,
			"uri" : "/setting/purchasePack/save.do,/setting/purchasePack/update.do,/setting/purchasePack/remove.do"
		},
		"lv" : 65536,
		"uri" : "/setting/purchasePack/save.do,/setting/purchasePack/update.do,/setting/purchasePack/remove.do",
		"min" : false,
		"max" : true
	}, {
		"id" : 23938,
		"menu" : {
			"id" : "setting.purchasePack",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "setting.purchasePack.query",
			"permissionScope" : 0,
			"uri" : "/setting/purchasePack/query.do,/setting/purchasePack/view.do"
		},
		"lv" : 65536,
		"uri" : "/setting/purchasePack/query.do,/setting/purchasePack/view.do",
		"min" : false,
		"max" : true
	}, {
		"id" : 23937,
		"menu" : {
			"id" : "setting.purchasePack",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23808,
		"menu" : {
			"id" : "supplier",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	}, {
		"id" : 23811,
		"menu" : {
			"id" : "supplier.manage",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "supplier.manage.edit",
			"permissionScope" : 0,
			"uri" : "/supplier/manage/save.do,/supplier/manage/remove.do"
		},
		"lv" : 65536,
		"uri" : "/supplier/manage/save.do,/supplier/manage/remove.do",
		"min" : false,
		"max" : true
	}, {
		"id" : 23942,
		"menu" : {
			"id" : "supplier.manage",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"menuAction" : {
			"id" : "supplier.manage.query",
			"permissionScope" : 0,
			"uri" : "/supplier/manage/query.do,/supplier/manage/view.do"
		},
		"lv" : 65536,
		"uri" : "/supplier/manage/query.do,/supplier/manage/view.do",
		"min" : false,
		"max" : true
	}, {
		"id" : 23809,
		"menu" : {
			"id" : "supplier.manage",
			"children" : [ ],
			"menuActions" : [ ],
			"empty" : true
		},
		"lv" : 1,
		"min" : false,
		"max" : false
	} ],
	"applicants" : [ ]
};
