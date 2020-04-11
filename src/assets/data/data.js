const exprienceListData = [
    {
        title: '四川精准服务系统',
        company: '德生科技股份有限公司',
        project_time: '2019.02-2019.03',
        project_desc: '精准服务系统是公司从产品提供商向产品+运营服务商转变的标志性产品，通过德生精准服务系统的呼叫、短信等功能，支持人社公众服务业务，提高公众满意度。',
        project_module: '主线功能有智能客服+人工坐席服务、待遇发放短信通知。实现精准社保卡信息客服服务。',
        project_responsibilities: '负责阿里云短信接口的开发，单条、批量发送、处理短信上行回执；在接口的基础上实现待遇发放短信的提醒功能。',
        project_skill_desc: '通过线程池异步方式批量发送短信下行通知，提升系统的响应和吞吐量。',
        desc: '查看详情',
        tag: ["springboot", "JPA", "Oracle", 'Redis', '线程池'],
        details: '详情'
    },
    {
        title: '陕西省人社一体化项目-补换卡',
        company: '德生科技股份有限公司',
        project_time: '2019.04-2019.07',
        project_desc: '为了陕西各个银行网点方便社保卡的补换卡办理、记录发卡数据、制卡数据大屏的展示。还包含后台管理部分：用户信息管理、区域管理、机构管理、设备管理、预制卡管理。',
        project_module: '桌面制卡机制卡、pc端对发卡记录的管理、自助终端制卡业务、数据大屏统计。',
        project_responsibilities: '负责整个 pc 端后台开发（设备认证、卡信息验证、制卡、数据回盘）以及后台管理：用户信息管理、区域管理、机构管理、设备管理、预制卡管理，后台整体 框架 SSM+webservice，接口的调用采用DES对称加密算法，对请求参数的加解密。一体化项目采用多个项目模块，前后端分离， 请求统一经过 Nginx转发到后端，每次请求的头部通过JWT的token的形式验证接口的合法性；系统采用 AOP 动态切换多个数据源。对于中间临时数据我用Redis进行缓存。',
        project_skill_desc: '该项目采用分布式负载均衡的部署方式。提升系统的性能和可用性。',
        desc: '查看详情',
        tag: ["SSM", "webservice", 'DES加解密', 'Nginx负载均衡'],
        details: '详情'
    },
    {
        title: '运营城市服务分布图',
        company: '德生科技股份有限公司',
        project_time: '2019.08-2019.08',
        project_desc: '以地图数据大屏的方式展示公司的业务运营范围和运营的业务。外网地址：http://114.67.49.72:21480/map.html',
        project_module: '统计各个省、市所运营的业务，例如：自助查询服务,社保卡数据采集发行服务，社保卡数据采集发行，自助补换卡服务,缴费服务,电商扶贫服务。',
        project_responsibilities: '通过财务给来的Excel数据，后台编写文件上传接口，然后统计地图的业务数据。',
        project_skill_desc: '该项目用到文件上传和统计类型的SQL编写。',
        project_img: true,
        desc: '查看详情',
        tag: ["springboot", "jenkins",'Echart'],
        details: '详情啊'
    },
    {
        title: '德生城市中台项目-人力资源产品',
        company: '德生科技股份有限公司',
        project_time: '2019.08-2020.02',
        project_desc: '安徽芜湖人力资源的产品需求，结合社保卡业务对蓝领人员进行精准就业，管理后台部分为人力资源运营平台，人才库主要对求职人才进行面试的记录、通知等。企业用工主要维护招聘的企业信息，结合企业信息匹配人才。小程序端（云社聘），可以发布一些职位和招聘公告、企业注册找人才。',
        project_module: 'pc端：也就是：人力资源运营平台，包括人才库（我的人才库、备用人才库、收藏的人才）、企业用工（企业-人才的匹配）、人才找工作、公司匹配人才。小程序端（云社聘）：招聘会信息、惠民政策、惠企政策、求职者信息登记、人才找职位、企业匹配，推荐人才、培训信息。',
        project_responsibilities: '编写搜索微服务公共组件。我采用的是elasticsearch搜索引擎作为基础搜索服务组件，ik中文分词器作为插件。目前完成关于政府类的政策搜索、根据标题或者内容作为筛选条件，政策类型（个人、企业）作为过滤条件；C端用户搜索职位，搜索职位或者公司查询对应的职位信息，然后根据多条件（地点范围、职位类型、薪资范围等）过滤查询结果；帮你推荐功能，根据用户填写的个性化字段，把这些作为筛选条件到es上面匹配信息。由于是公共层服务为了解耦其他服务，本搜索服务都对外提供全量同步、增量同步、删除接口。只要其他服务以restful风格的请求调用即可。',
        project_skill_desc: '基于springcloud的微服务架构，注册中心使用阿里的nacos（集成注册中心、分布式配置中心）；服务网关使用spring的gateway（使用基于netty异步io）。',
        desc: '查看详情    小程序已上线，搜索《云社聘》',
        tag: ["springcloud","分布式架构", "jenkins","高可用mysql"],
        details: '详情啊2'
    },
    {
        title: '项目2',
        desc: '查看详情',
        tag: ["springboot", "jenkins"],
        details: '详情啊2'
    },
    {
        title: '项目2',
        desc: '查看详情',
        tag: ["springboot", "jenkins"],
        details: '详情啊2'
    },
    {
        title: '项目2',
        desc: '查看详情',
        tag: ["springboot", "jenkins"],
        details: '详情啊2'
    },
    {
        title: '项目2',
        desc: '查看详情',
        tag: ["springboot", "jenkins"],
        details: '详情啊2'
    },
    {
        title: '项目2',
        desc: '查看详情',
        tag: ["springboot", "jenkins"],
        details: '详情啊2'
    }
];
export default exprienceListData;