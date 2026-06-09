import { Question } from './types';

export const QUESTIONS: Question[] = [
  // ==================== 单选题 (1 - 50) ====================
  {
    id: 1,
    type: 'choice',
    question: '数据库技术的核心是',
    options: ['A. 数据', 'B. 数据库管理系统', 'C. 操作系统', 'D. 应用程序'],
    answer: 'B',
    tags: ['数据库概述数据模型', '数据库管理系统'],
    explanation: '数据库管理系统（DBMS）是数据库系统的核心软件，负责数据库的定义、维护、查询和控管。'
  },
  {
    id: 2,
    type: 'choice',
    question: '数据库系统阶段相比文件系统阶段，不具备的特点是',
    options: ['A. 数据结构化', 'B. 数据共享性高', 'C. 数据冗余度高', 'D. 数据独立性高'],
    answer: 'C',
    tags: ['数据库概述数据模型'],
    explanation: '数据库系统阶段具有低冗余、高共享和高独立性的特点。相比之下，文件系统阶段数据冗余度更高，因此高冗余度不是数据库系统阶段具备的特点。'
  },
  {
    id: 3,
    type: 'choice',
    question: '数据库三级模式结构中，描述全体数据的全局逻辑结构和特征的是',
    options: ['A. 外模式', 'B. 模式', 'C. 内模式', 'D. 用户模式'],
    answer: 'B',
    tags: ['三级模式独立性'],
    explanation: '模式（也称逻辑模式）描述的是全体数据的全局逻辑结构和特征。外模式对应用户视图（局部），内模式对应物理存储结构。'
  },
  {
    id: 4,
    type: 'choice',
    question: 'SQL Server 2008是一个( )型数据库系统。',
    options: ['A. 网状', 'B. 层次', 'C. 关系', 'D. 以上都不是'],
    answer: 'C',
    tags: ['关系模型RDBMS'],
    explanation: 'SQL Server 2008 是典型的关系型数据库管理系统（RDBMS）。'
  },
  {
    id: 5,
    type: 'choice',
    question: '下列选项中，不属于概念模型基本概念的是',
    options: ['A. 实体', 'B. 属性', 'C. 码', 'D. 存储结构'],
    answer: 'D',
    tags: ['概念设计E-R模型'],
    explanation: '概念模型处于现实世界和机器世界的中间，包含实体、属性、联系、码等，不涉及具体的物理存储结构。存储结构属于物理/内模式的概念。'
  },
  {
    id: 6,
    type: 'choice',
    question: '学生与课程之间的选课联系属于',
    options: ['A. 1:1联系', 'B. 1:n联系', 'C. m:n联系', 'D. 无联系'],
    answer: 'C',
    explanation: '单名学生可以选修多门课程，单门课程可以被多名学生选修，因此是多对多（m:n）联系。',
    tags: ['概念设计E-R模型']
  },
  {
    id: 7,
    type: 'choice',
    question: '在 SELECT 语句的 WHERE 子句中，可以匹配 0 个到多个字符的通配符是',
    options: ['A. *', 'B. %', 'C. _', 'D. ?'],
    answer: 'B',
    tags: ['SQL基本操作'],
    explanation: '在 SQL 模糊查询中使用 `LIKE` 进行匹配，其中 `%` 匹配 0 个或任意多个字符，而 `_` 仅匹配单个任意字符。'
  },
  {
    id: 8,
    type: 'choice',
    question: '关系模型中，二维表的行称为',
    options: ['A. 属性', 'B. 元组', 'C. 域', 'D. 码'],
    answer: 'B',
    tags: ['关系模型RDBMS'],
    explanation: '行在关系代数和关系模型中被称为“元组（Tuple）”，列被称为“属性（Attribute）”。'
  },
  {
    id: 9,
    type: 'choice',
    question: '下列不属于关系性质的是',
    options: ['A. 同一列的数据类型必须相同', 'B. 任意两个元组不能完全重复', 'C. 列的顺序可以任意交换', 'D. 属性可以进一步拆分'],
    answer: 'D',
    tags: ['关系模型RDBMS', '规范化理论'],
    explanation: '根据第一范式（1NF）的要求，关系的属性值必须是原子的，不可再分。所以“属性可以进一步拆分”不属于正规关系的性质。'
  },
  {
    id: 10,
    type: 'choice',
    question: '关系数据库管理系统应能实现的专门关系运算包括',
    options: ['A. 选择、投影、连接', 'B. 排序、索引、统计', 'C. 关联、更新、排序', 'D. 显示、打印、制表'],
    answer: 'A',
    tags: ['关系代数运算'],
    explanation: '专门的关系代数运算指的是选择（选取满足条件的行）、投影（选取满足条件的列）、连接（结合两张表）。'
  },
  {
    id: 11,
    type: 'choice',
    question: '若属性 F 是基本关系 R 的外码，参照基本关系 S 的主码 K，则 R 中每个元组在 F 上的值',
    options: [
      'A. 必须等于 S 中某个元组的主码值',
      'B. 必须取空值',
      'C. 要么取空值，要么等于 S 中某个元组的主码值',
      'D. 可以取任意值'
    ],
    answer: 'C',
    tags: ['完整性约束'],
    explanation: '这是参照完整性（Referential Integrity）的经典定义。外码的值要么为空（NULL），要么必须存在于所参照表的主键值中。'
  },
  {
    id: 12,
    type: 'choice',
    question: '关系代数中，从关系中选取满足条件的元组的操作是',
    options: ['A. 投影', 'B. 选择', 'C. 连接', 'D. 笛卡尔积'],
    answer: 'B',
    tags: ['关系代数运算'],
    explanation: '选择（Selection，用 σ 表示）是选取表中满足特定约束的行（元组）的操作。'
  },
  {
    id: 13,
    type: 'choice',
    question: '关系代数中，从关系中选取若干列组成新关系的操作是',
    options: ['A. 投影', 'B. 选择', 'C. 连接', 'D. 并'],
    answer: 'A',
    tags: ['关系代数运算'],
    explanation: '投影（Projection，用 π 表示）是从表中指定若干列组成新关系的操作。'
  },
  {
    id: 14,
    type: 'choice',
    question: 'SQL 数据库中的视图与数据库系统三级模式中的( )对应。',
    options: ['A. 关系模式', 'B. 外模式', 'C. 内模式', 'D. 模式'],
    answer: 'B',
    tags: ['三级模式独立性', '视图操作'],
    explanation: '视图对应的是外模式（用户视图，局部逻辑结构），基表对应的是模式（全局逻辑结构）。'
  },
  {
    id: 15,
    type: 'choice',
    question: '函数依赖中，若 Y 函数依赖于 X，且 Y 不是 X 的子集，则称为',
    options: ['A. 平凡函数依赖', 'B. 非平凡函数依赖', 'C. 完全函数依赖', 'D. 传递函数依赖'],
    answer: 'B',
    tags: ['规范化理论'],
    explanation: '如果 X → Y 且 Y 不是 X 的子集，则称 X → Y 是非平凡的函数依赖；如果是子集则为平凡依赖。'
  },
  {
    id: 16,
    type: 'choice',
    question: '若 X → Y，且 X 的真子集不能决定 Y，则 Y 对 X 是',
    options: ['A. 部分函数依赖', 'B. 完全函数依赖', 'C. 传递函数依赖', 'D. 平凡依赖'],
    answer: 'B',
    tags: ['规范化理论'],
    explanation: '完全函数依赖指一个属性必须依赖于自变量的组合整体，其任何真子集都不能决定该值。如果真子集能决定，则属于部分函数依赖。'
  },
  {
    id: 17,
    type: 'choice',
    question: '关系模式满足 1NF 的要求是',
    options: ['A. 每个属性都是不可再分的原子值', 'B. 不存在部分函数依赖', 'C. 不存在传递函数依赖', 'D. 没有数据冗余'],
    answer: 'A',
    tags: ['规范化理论'],
    explanation: '第一范式（1NF）的根本要求是：表中的每列都是不可再分的原子数据项。'
  },
  {
    id: 18,
    type: 'choice',
    question: 'SELECT 语句中要使用 HAVING 子句必须使用( )子句。',
    options: ['A. ORDER BY', 'B. WHERE', 'C. GROUP BY', 'D. 无需配合'],
    answer: 'C',
    tags: ['SQL基本操作'],
    explanation: 'HAVING 通常同 GROUP BY 结合使用，用于对分组（Group）后的聚合计算结果进行阈值过滤。'
  },
  {
    id: 19,
    type: 'choice',
    question: '概念结构设计最常用的方法是',
    options: ['A. 自顶向下法', 'B. 自底向上法', 'C. 逐步扩张法', 'D. 混合策略法'],
    answer: 'B',
    tags: ['概念设计E-R模型'],
    explanation: '自底向上法是设计概念结构（如E-R图）中最常采用的方法：先定义各部门/子系统的局部应用，然后合并集成为全局概念模式。'
  },
  {
    id: 20,
    type: 'choice',
    question: 'E-R 图转换为关系模型时，m:n 联系需要',
    options: ['A. 转换为一个独立的关系模式', 'B. 与任意一端合并', 'C. 与 n 端合并', 'D. 直接删除'],
    answer: 'A',
    tags: ['逻辑结构设计'],
    explanation: '多对多（m:n）联系必须转换为一个独立的关系模式，其主键由相连的所有实体的外码共同组成。'
  },
  {
    id: 21,
    type: 'choice',
    question: 'SQL Server 2008 中，用于存储数据库日志的文件后缀是',
    options: ['A. .mdf', 'B. .ndf', 'C. .ldf', 'D. .sql'],
    answer: 'C',
    tags: ['SQL Server基础'],
    explanation: '`.mdf` 是主数据文件（Primary Data File），`.ndf` 是辅助数据文件（Secondary Data File），而 `.ldf` 是事务日志文件（Log Data File）。'
  },
  {
    id: 22,
    type: 'choice',
    question: '在关系数据库中，关于主键的说法正确的是',
    options: [
      'A. 用于唯一的标识一个元组',
      'B. 一个表允许有多个主键',
      'C. 创建唯一的索引,允许取空值',
      'D. 只允许以表中的首属性建立'
    ],
    answer: 'A',
    tags: ['完整性约束'],
    explanation: '主键（Primary Key）是唯一标示二维表中每一行（元组）的属性集。一张表只能有一个主键约束，且主键属性不允取 NULL 值。'
  },
  {
    id: 23,
    type: 'choice',
    question: '定义表结构时，设置某列值不能为空的关键字是',
    options: ['A. UNIQUE', 'B. PRIMARY KEY', 'C. NOT NULL', 'D. CHECK'],
    answer: 'C',
    tags: ['完整性约束'],
    explanation: '在建表或修改表结构时，`NOT NULL` 用于声明一个字段必须有值，不能留空。'
  },
  {
    id: 24,
    type: 'choice',
    question: '若要限制某列的取值范围在 1~100 之间，应使用( )约束',
    options: ['A. PRIMARY KEY', 'B. FOREIGN KEY', 'C. CHECK', 'D. DEFAULT'],
    answer: 'C',
    tags: ['完整性约束'],
    explanation: '`CHECK` 约束用于定义列值的逻辑域限制，如 `CHECK (score BETWEEN 1 AND 100)`。'
  },
  {
    id: 25,
    type: 'choice',
    question: '向表中插入数据的 SQL 语句是',
    options: ['A. INSERT', 'B. UPDATE', 'C. DELETE', 'D. SELECT'],
    answer: 'A',
    tags: ['SQL基本操作'],
    explanation: '`INSERT INTO Table ...` 是数据操纵语言中的插入语句，`UPDATE` 为修改，`DELETE` 为删除。'
  },
  {
    id: 26,
    type: 'choice',
    question: '自然连接是构成新关系的有效方法，一般情况下当对关系 R 和 S 使用自然连接时，要求 R 和 S 有一个或多个共有的',
    options: ['A. 元组', 'B. 行', 'C. 记录', 'D. 属性'],
    answer: 'D',
    tags: ['关系代数运算'],
    explanation: '自然连接（Natural Join）是一种特殊的等值连接，它要求两个关系中必须有共有的“属性”（列名和类型都相同），在连接结果中还会去除重复属性列。'
  },
  {
    id: 27,
    type: 'choice',
    question: '聚合函数中，用于统计行数的是',
    options: ['A. SUM()', 'B. AVG()', 'C. COUNT()', 'D. MAX()'],
    answer: 'C',
    tags: ['SQL基本操作'],
    explanation: '`COUNT()` 函数用于统计结果集的行数或某列非空的值个数。`SUM()`求和，`AVG()`求平均，`MAX()`求最大值。'
  },
  {
    id: 28,
    type: 'choice',
    question: '分组查询中，用于筛选分组后结果的关键字是',
    options: ['A. WHERE', 'B. HAVING', 'C. GROUP BY', 'D. ORDER BY'],
    answer: 'B',
    tags: ['SQL基本操作'],
    explanation: '`GROUP BY` 对查询结果分组，而对分组后产生的临时聚类级别进行条件筛选必须使用 `HAVING`，它不同于作用于基表的 `WHERE`。'
  },
  {
    id: 29,
    type: 'choice',
    question: '内连接的关键字是',
    options: ['A. INNER JOIN', 'B. LEFT JOIN', 'C. RIGHT JOIN', 'D. FULL JOIN'],
    answer: 'A',
    tags: ['SQL常用查询'],
    explanation: '`INNER JOIN` 表示内连接；`LEFT JOIN` 表示左外连接；`RIGHT JOIN` 为右外连接；`FULL JOIN` 为全外连接。'
  },
  {
    id: 30,
    type: 'choice',
    question: '数据库中只存放视图的',
    options: ['A. 操作', 'B. 对应的数据', 'C. 定义', 'D. 限制'],
    answer: 'C',
    tags: ['视图操作'],
    explanation: '视图是一张虚拟表。数据库不存储视图里的实际数据，数据仍然储存在原始的基表中，数据库中只存储视图模版的结构“定义”。'
  },
  {
    id: 31,
    type: 'choice',
    question: '视图是',
    options: ['A. 真实存储数据的表', 'B. 从基本表导出的虚表', 'C. 索引的另一种称呼', 'D. 存储过程的别名'],
    answer: 'B',
    tags: ['视图操作'],
    explanation: '视图（View）本质是一个预定义的投影和选择查询，它属于“虚表”，不存储物理数据。'
  },
  {
    id: 32,
    type: 'choice',
    question: '创建视图的 SQL 语句是',
    options: ['A. CREATE VIEW', 'B. ALTER VIEW', 'C. DROP VIEW', 'D. CREATE INDEX'],
    answer: 'A',
    tags: ['视图操作'],
    explanation: '`CREATE VIEW` 语句用于定义和创建视图，`DROP VIEW` 则是销毁视图。'
  },
  {
    id: 33,
    type: 'choice',
    question: '索引的主要作用是',
    options: ['A. 减少数据冗余', 'B. 加快数据查询速度', 'C. 保证数据完整性', 'D. 实现表间连接'],
    answer: 'B',
    tags: ['索引创建性能'],
    explanation: '索引（Index）类似于书籍的目录，其最核心、最主要的目的在于缩短磁头移向目标块的时间，即极大提升数据的检索和检索速度。'
  },
  {
    id: 34,
    type: 'choice',
    question: '( )是位于用户与操作系统之间的一层数据管理软件。',
    options: ['A. 数据库系统', 'B. 数据库管理系统', 'C. 数据库', 'D. 数据库应用系统'],
    answer: 'B',
    tags: ['数据库概述数据模型', '数据库管理系统'],
    explanation: '数据库管理系统（DBMS）是夹在操作系统（OS）和应用层（用户）之间的大型管理性软件，用于有效调控盘片硬件数据并提供标准SQL口。'
  },
  {
    id: 35,
    type: 'choice',
    question: '声明局部变量的关键字是',
    options: ['A. DECLARE', 'B. SET', 'C. SELECT', 'D. PRINT'],
    answer: 'A',
    tags: ['T-SQL编程触发器'],
    explanation: '在 SQL Server (T-SQL) 中，使用 `DECLARE @Variable DataType` 的语法来声明局部变量。'
  },
  {
    id: 36,
    type: 'choice',
    question: '流程控制语句中，用于条件判断的是',
    options: ['A. BEGIN...END', 'B. IF...ELSE', 'C. WHILE', 'D. GOTO'],
    answer: 'B',
    tags: ['T-SQL编程触发器'],
    explanation: '流程控制中，`IF ... ELSE` 用于多分支条件流判断；`WHILE` 为循环控制。'
  },
  {
    id: 37,
    type: 'choice',
    question: '用户定义函数中，返回单个值的是',
    options: ['A. 标量函数', 'B. 内嵌表值函数', 'C. 多语句表值函数', 'D. 存储过程'],
    answer: 'A',
    tags: ['T-SQL编程触发器'],
    explanation: '在用户定义函数（UDF）中，标量值函数（Scalar Function）有且仅返回一个单一的数据值，而表值函数则会产生一个并列结构数据集。'
  },
  {
    id: 38,
    type: 'choice',
    question: '在创建索引时要用到下列哪个关键字',
    options: ['A. AS', 'B. ON', 'C. INTO', 'D. SET'],
    answer: 'B',
    tags: ['索引创建性能'],
    explanation: '创建索引的标准语法为：`CREATE INDEX index_name ON table_name (column_name)`，使用的是 `ON` 关键字。'
  },
  {
    id: 39,
    type: 'choice',
    question: '触发器是( )时自动执行的存储过程',
    options: ['A. 用户手动调用', 'B. 特定事件触发', 'C. 定时执行', 'D. 数据库启动时'],
    answer: 'B',
    tags: ['T-SQL编程触发器'],
    explanation: '触发器（Trigger）是一种不受手工调配、只挂接在基表增删改特定动作前后的特殊存储过程，只要满足事件逻辑即自动被内核调度。'
  },
  {
    id: 40,
    type: 'choice',
    question: 'DML 触发器不包括',
    options: ['A. INSERT 触发器', 'B. UPDATE 触发器', 'C. DELETE 触发器', 'D. CREATE 触发器'],
    answer: 'D',
    tags: ['T-SQL编程触发器'],
    explanation: 'DML 包含增（INSERT）、改（UPDATE）、删（DELETE）操作。`CREATE` 属于数据定义语言（DDL），不属于 DML 类别。'
  },
  {
    id: 41,
    type: 'choice',
    question: '事务的四大特性不包括',
    options: ['A. 原子性', 'B. 一致性', 'C. 隔离性', 'D. 并发性'],
    answer: 'D',
    tags: ['事务与并发控制'],
    explanation: '事务具有典型的 ACID 特性，即：原子性（Atomicity）、一致性（Consistency）、隔离性（Isolation）和持续性（Durability）。而并发性是系统的运行状态，不属于事务本身的四大性质特征。'
  },
  {
    id: 42,
    type: 'choice',
    question: '学生关系(学号，姓名，性别，年龄，系号，系名)中，“系名”对主关键字“学号”的函数依赖是',
    options: ['A. 平凡函数依赖', 'B. 完全函数依赖', 'C. 部分函数依赖', 'D. 传递函数依赖'],
    answer: 'D',
    tags: ['规范化理论'],
    explanation: '学号决定了系号（学号 → 系号），而系号决定了系名（系号 → 系名），根据传递规律，学号决定系名，这被称为传递函数依赖（Transitive Functional Dependency）。'
  },
  {
    id: 43,
    type: 'choice',
    question: '共享锁的作用是',
    options: [
      'A. 允许其他事务读取数据，禁止修改',
      'B. 禁止其他事务读取和修改',
      'C. 允许其他事务修改数据',
      'D. 只适用于索引'
    ],
    answer: 'A',
    tags: ['事务与并发控制'],
    explanation: '共享锁（S锁）又称读锁。若事务T加上了共享锁，则它只能读取不能修改，其他并发事务也能加S锁读取该资源，但任何人均无法加排他锁（X锁）去对其进行改动。'
  },
  {
    id: 44,
    type: 'choice',
    question: '死锁发生后，SQL Server 会',
    options: ['A. 自动回滚优先级最低的事务', 'B. 等待用户手动处理', 'C. 重启数据库', 'D. 忽略死锁'],
    answer: 'A',
    tags: ['事务与并发控制'],
    explanation: '当并发执行引发环形锁依赖检测即出现死锁。SQL Server 会自控机制裁定并杀死一个“死锁牺牲者”（通常选择回滚或资源消耗最小、优先级最低的事务）以解除锁闭。'
  },
  {
    id: 45,
    type: 'choice',
    question: 'SQL Server 的身份验证模式不包括',
    options: ['A. Windows 身份验证', 'B. 混合身份验证', 'C. SQL Server 身份验证', 'D. 指纹身份验证'],
    answer: 'D',
    tags: ['安全管理权限'],
    explanation: 'SQL Server 支持混合身份验证（SQL账户密码与操作系统联合）和单 Windows 域用户授权，不存在生物特征层面的指纹校验选项。'
  },
  {
    id: 46,
    type: 'choice',
    question: '在一个满足 1NF 的关系中，不存在部分函数依赖，那么该关系模式至少属于',
    options: ['A. 4NF', 'B. 3NF', 'C. 2NF', 'D. BCNF'],
    answer: 'C',
    tags: ['规范化理论'],
    explanation: '第二范式（2NF）在第一范式的基础上消除了所有非主属性对码的“部分函数依赖”，要求每个非主属性都必须完全依赖主键码。'
  },
  {
    id: 47,
    type: 'choice',
    question: '授予用户权限的 SQL 语句是',
    options: ['A. GRANT', 'B. REVOKE', 'C. DENY', 'D. REMOVE'],
    answer: 'A',
    tags: ['安全管理权限'],
    explanation: '使用 `GRANT` 语句分配权限给指定主体（User/Role），`REVOKE` 则收紧并卸免此前给予的特权。'
  },
  {
    id: 48,
    type: 'choice',
    question: '撤销用户权限的 SQL 语句是',
    options: ['A. GRANT', 'B. REVOKE', 'C. DENY', 'D. DELETE'],
    answer: 'B',
    tags: ['安全管理权限'],
    explanation: '`REVOKE` 代表收回/撤免指令级动作，可以让此前通过 `GRANT` 分发出的特定赋权原路报废。'
  },
  {
    id: 49,
    type: 'choice',
    question: '数据库设计的最终目标是',
    options: [
      'A. 生成E-R图',
      'B. 建立符合需求的数据库及应用系统',
      'C. 编写存储过程',
      'D. 创建索引'
    ],
    answer: 'B',
    tags: ['逻辑结构设计', '需求与生命周期'],
    explanation: '数据库工程设计的核心使命正是为了在特定物理软件平台上构建高度统一、正确冗余且完全支持企业运作需求、性能保障的实用数据库及管理软件。'
  },
  {
    id: 50,
    type: 'choice',
    question: '下列属于系统数据库的是',
    options: [
      'A. master',
      'B. teaching',
      'C. inventory',
      'D. student'
    ],
    answer: 'A',
    tags: ['系统数据库', 'SQL Server基础'],
    explanation: 'master 数据库是 SQL Server 的核心系统数据库，记录了 SQL Server 的所有系统级信息、配置设置、登录账户和系统配置。'
  },
  {
    id: 51,
    type: 'blank',
    question: '数据库技术发展经历了人工管理阶段、[ 文件系统阶段 ]和数据库系统阶段三个阶段。',
    answer: ['文件系统阶段'],
    tags: ['数据库发展'],
    explanation: '数据库技术发展经历了人工管理阶段、文件系统阶段和数据库系统阶段。在文件系统阶段，数据开始以文件形式进行存储，但数据之间缺乏系统的管理与联系。'
  },
  {
    id: 52,
    type: 'blank',
    question: '数据库系统的核心是[ 数据库管理系统(DBMS) ]，位于用户和操作系统之间。',
    answer: ['数据库管理系统(DBMS)'],
    tags: ['DBMS概述'],
    explanation: '数据库管理系统（DBMS）是复杂的系统软件，负责对底层数据统一进行定义、构建、调度与安全控制。'
  },
  {
    id: 53,
    type: 'blank',
    question: 'SQL 语言称为[ 结构化查询语言 ]。',
    answer: ['结构化查询语言'],
    tags: ['SQL基础'],
    explanation: 'SQL 即 Structured Query Language，是通用、标准的关系数据库交互语言。'
  },
  {
    id: 54,
    type: 'blank',
    question: '三级模式之间的两级映像保证了数据的[ 逻辑独立性 ]和物理独立性。',
    answer: ['逻辑独立性'],
    tags: ['数据独立性'],
    explanation: '外模式/模式映像保证了逻辑独立性（局部修改不乱物理模式）；模式/内模式映像保证了物理独立性（内盘换轨无需修改全局定义）。'
  },
  {
    id: 55,
    type: 'blank',
    question: '现实世界到机器世界的中间层次是[ 概念(E-R) ]模型。',
    answer: ['概念(E-R)'],
    tags: ['数据模型'],
    explanation: '概念模型（或E-R模型）是现实世界到机器世界的中间抽象层，它只表达现实世界的业务语义和联系，不涉及任何具体底层数据库实现。'
  },
  {
    id: 56,
    type: 'blank',
    question: '在 T-SQL 语言中，若要修改某张表的结构，应该使用的修改关键字是 [ ALTER ]。',
    answer: ['ALTER'],
    tags: ['TSQL基础'],
    explanation: 'ALTER 命令是数据库定义语言（DDL）中用于动态扩充、修改、删除列或其约束定义的保留列关键字，写法如 `ALTER TABLE tbl_name ...`。'
  },
  {
    id: 57,
    type: 'blank',
    question: '关系代数的运算对象是关系，运算结果也是[ 关系 ]。',
    answer: ['关系'],
    tags: ['关系代数'],
    explanation: '关系代数的运算对象和结果都是关系（因为满足数学中的封闭性），结果依然在逻辑上等同于一个关系。'
  },
  {
    id: 58,
    type: 'blank',
    question: '选择操作是从关系中选取满足[ 指定条件 ]的元组。',
    answer: ['指定条件'],
    tags: ['关系代数'],
    explanation: '选择操作（Selection）是根据用户自定义的逻辑真假表达式（即指定条件）在某一给定关系表中进行水平行（元组）筛选的专用操作。'
  },
  {
    id: 59,
    type: 'blank',
    question: '函数依赖中，若 X → Y 且 Y → Z，则 X → Z 称为[ 传递函数依赖 ]。',
    answer: ['传递函数依赖'],
    tags: ['规范化理论'],
    explanation: '传递函数依赖是导致关系模式产生冗余、插入和删除异常的核心根源之一，在数据库模式设计与规范化中应该尽可能被消除。'
  },
  {
    id: 60,
    type: 'blank',
    question: '事务的四个属性包括原子性、[ 一致性 ]、隔离性和[ 持久性 ]。',
    answer: ['一致性', '持久性'],
    tags: ['事务性质'],
    explanation: '一致性（Consistency）和持久性（Durability）是四个核心特性之一（ACID：Atomicity，Consistency，Isolation，Durability）。'
  },
  {
    id: 61,
    type: 'blank',
    question: '1NF 要求关系的每个属性都是[ 不可再分 ]的。',
    answer: ['不可再分'],
    tags: ['规范化理论'],
    explanation: '第一范式要求关系的每个属性都必须是不可再分的最小原子值。'
  },
  {
    id: 62,
    type: 'blank',
    question: '数据库设计的六个阶段依次是需求分析、概念结构设计、[ 逻辑结构设计 ]、物理设计、数据库实施、运行与维护。',
    answer: ['逻辑结构设计'],
    tags: ['数据库设计'],
    explanation: '逻辑结构设计把独立于具体机器平台的概念模型（E-R图）转换为某一特定数据库模型（如关系模型、表和外键关联模式）。'
  },
  {
    id: 63,
    type: 'blank',
    question: 'E-R 图转换为关系模式时，1:n 联系通常与[ n端 ]的关系模式合并。',
    answer: ['n端'],
    tags: ['逻辑结构设计'],
    explanation: '为了缩减因创建过多元胞表从而提高多卡关联效率，一对多（1:n）关系中的联系一般不会单独生成新表，而是直接附属于多的一侧（n端）的关系模式。'
  },
  {
    id: 64,
    type: 'blank',
    question: '数据库设计中的概念结构设计的主要工具是[ E-R图 ]。',
    answer: ['E-R图'],
    tags: ['概念设计'],
    explanation: 'Peter Chen先生开创的实体-联系（Entity-Relationship，E-R）图是当下最核心、公认度高、直观性强的概念结构逻辑图绘制工具。'
  },
  {
    id: 65,
    type: 'blank',
    question: '创建表的 SQL 语句是[ CREATE TABLE ]。',
    answer: ['CREATE TABLE'],
    tags: ['表操作'],
    explanation: '`CREATE TABLE` 语句用于声明和定义基本二维表模式，属于标准数据定义语言（DDL）。'
  },
  {
    id: 66,
    type: 'blank',
    question: '主键约束的关键字是[ PRIMARY KEY ]，唯一约束的关键字是[ UNIQUE ]。',
    answer: ['PRIMARY KEY', 'UNIQUE'],
    tags: ['完整性约束'],
    explanation: '`PRIMARY KEY` 定义主码唯一性且不允许Null值；唯一码约束的关键字是 `UNIQUE`。'
  },
  {
    id: 67,
    type: 'blank',
    question: '查询语句中，过滤重复行使用[ DISTINCT ]关键字。',
    answer: ['DISTINCT'],
    tags: ['SQL操作'],
    explanation: '在 `SELECT` 句式中使用 `DISTINCT` 能够针对多重返回的同质冗余行数据进行去除非重复行操作。'
  },
  {
    id: 68,
    type: 'blank',
    question: '外模式/模式映象为数据库提供了[ 逻辑 ]数据独立性。',
    answer: ['逻辑'],
    tags: ['数据独立性'],
    explanation: '外模式位于概念模式的正前方。通过外模式/模式映像转接，全局中层表列发生业务调整只要重造映像，对外输出的视图依然合规。'
  },
  {
    id: 69,
    type: 'blank',
    question: '分组查询的关键字是[ GROUP BY ]，对分组结果筛选使用[ HAVING ]关键字。',
    answer: ['GROUP BY', 'HAVING'],
    tags: ['SQL基础'],
    explanation: '分组机制利用 `GROUP BY` 进行特征归并分区；对分组后的结果进行进一步筛选必须使用 `HAVING` 指示，不可以使用普通的 WHERE 条件。'
  },
  {
    id: 70,
    type: 'blank',
    question: '内连接中，若两个表都没有指定连接类型，默认使用[ 等值连接 ]。',
    answer: ['等值连接'],
    tags: ['表连接'],
    explanation: '内连接默认将共性的关联键名称以等于逻辑进行双表元胞水平粘接，也被称作等值连接。'
  },
  {
    id: 71,
    type: 'blank',
    question: '子查询中，[ EXISTS ] 关键字用于判断子查询的结果是否存在。',
    answer: ['EXISTS'],
    tags: ['子查询'],
    explanation: '谓词 `EXISTS` 在处理子关联查询时效能最优，它会向外部吐回真或假以标示该子记录群中是否存在至少一条合法要素观测。'
  },
  {
    id: 72,
    type: 'blank',
    question: '数据库文件有 [ 主数据文件 ]、辅助数据文件和 [ 事务日志文件 ]。',
    answer: ['主数据文件', '事务日志文件'],
    tags: ['数据库文件'],
    explanation: 'SQL Server 的硬盘文件包含保存主系统信息和启动定义的 .mdf（主数据文件）、拓充所用的 .ndf（辅助数据文件）与存储修改回滚链的 .ldf（事务日志文件）。'
  },
  {
    id: 73,
    type: 'blank',
    question: '索引分为聚集索引和 [ 非聚集索引 ]，一个表最多只能有 1 个聚集索引。',
    answer: ['非聚集索引'],
    tags: ['索引技术'],
    explanation: '聚集索引和底盘数据的真实物理行存储次序是完全一致绑定的。由于数据的物理次序唯一，故一张表只能配置1个，其他扩展只能叫非聚集索引。'
  },
  {
    id: 74,
    type: 'blank',
    question: '局部变量的名称以 [ @开头 ]，赋值可以使用 [ SET 或 SELECT ] 语句。',
    answer: ['@开头', 'SET 或 SELECT'],
    tags: ['TSQL编程'],
    explanation: 'T-SQL中用 `@` 开始作为局部自定义变量，赋值用 `SET @v = 值` 或随检索结果赋能的 `SELECT @v = 字段名` 进行赋值。'
  },
  {
    id: 75,
    type: 'blank',
    question: 'CASE 语句分为简单 CASE 格式和[ 搜索 CASE 格式 ]。',
    answer: ['搜索 CASE 格式'],
    tags: ['TSQL编程'],
    explanation: 'CASE 结构的两大类：简单 CASE（只能进行单一值相等的判断）和搜索 CASE （支持任意布尔判断，形如 `CASE WHEN Score >= 60 THEN ...`）。'
  },
  {
    id: 76,
    type: 'blank',
    question: '关系模型允许定义三类完整性规则，即 [ 实体 ] 完整性、[ 参照 ] 完整性、用户自定义的完整性规则。',
    answer: ['实体', '参照'],
    tags: ['完整性规则'],
    explanation: '关系约束的经典三支柱：实体完整性（主码非空唯一）、参照完整性（外码参照关联约束），以及个案特定要求的用户自定义约束。'
  },
  {
    id: 77,
    type: 'blank',
    question: 'DML 触发器包括 AFTER 触发器和 [ INSTEAD OF ] 触发器两类。',
    answer: ['INSTEAD OF'],
    tags: ['触发器'],
    explanation: '在 SQL Server 中，DML触发动作分成动作完成后续响应的 `AFTER`，以及拦截直接绕开并自我篡改执行过程的 `INSTEAD OF`（替代执行）。'
  },
  {
    id: 78,
    type: 'blank',
    question: '触发器运行时，系统会自动生成两个临时表：[ Inserted ] 和 [ Deleted ]。',
    answer: ['Inserted', 'Deleted'],
    tags: ['触发器'],
    explanation: 'DML事件启动内核会在内存中建立虚拟镜像临时表：`Inserted` 存储最新追加或覆备写的行快照，而 `Deleted` 备份刚才被剥夺抹除的前任旧貌行。'
  },
  {
    id: 79,
    type: 'blank',
    question: '事务的提交语句是 [ COMMIT ]，回滚语句是 [ ROLLBACK ]。',
    answer: ['COMMIT', 'ROLLBACK'],
    tags: ['事务与并发'],
    explanation: '当数据库操作顺利通过，发出 `COMMIT` 将全盘生效；若需取消动作或有中间异常，则发送 `ROLLBACK` 得使全流程瞬间重返事务初态。'
  },
  {
    id: 80,
    type: 'blank',
    question: 'SQL Server 的身份验证模式包括 Windows 身份验证和[ 混合(SQL Server) ]身份验证。',
    answer: ['混合(SQL Server)'],
    tags: ['安全管理'],
    explanation: '内置的安全保护机制：单独的 Windows 用户验证模式，以及混合机制（既放行操作系统用户，也处理 sa 等数据库内部自建账号的账号密码）。'
  }
];
