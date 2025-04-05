<script>


    // 显示首页内容
    function showHome() {
        showSection('home');
    }

    // 显示研究方向内容
    function showResearch() {
        showSection('research');
    }

    // 显示成果及论文内容
    function showAchievements() {
        showSection('achievements');
    }

    // 显示组员介绍内容
    function showMembers() {
        showSection('members');
    }

    // 显示课题组新闻内容
    function showNews() {
        showSection('news');
    }

    // 显示组内活动内容
    function showActivities() {
        showSection('activities');
    }

    // 显示加入我们内容
    function showJoinUs() {
        showSection('join-us');
    }

// 修改后的按钮状态更新逻辑
function showSection(sectionId) {
    // 内容切换
    document.querySelectorAll('section').forEach(section => {
        section.classList.toggle('active', section.id === sectionId);
    });

    // 按钮状态更新
    document.querySelectorAll('nav button').forEach(btn => {
        const isActive = btn.dataset.section === sectionId;
        btn.classList.toggle('active', isActive);
    });

    // 面包屑导航
    updateBreadcrumb(sectionId);
    currentSection = sectionId;
}

// 初始化绑定
document.addEventListener('DOMContentLoaded', () => {
    // 验证数据绑定
    document.querySelectorAll('nav button').forEach(btn => {
        if(!btn.dataset.section){
            const funcName = btn.onclick.toString().match(/show(\w+)/)[1];
            btn.dataset.section = funcName.toLowerCase();
        }
    });
    showHome(); // 初始加载
});




        // 设置首页激活
        showHome();
    });

// 新增面包屑导航更新函数
function updateBreadcrumb(sectionId) {
    const sectionNames = {
        'home': '首页',
        'research': '研究方向',
        'achievements': '成果及论文',
        'members': '组员介绍',
        'news': '课题组新闻',
        'activities': '组内活动',
        'join-us': '加入我们'
    };
    
    let breadcrumb = '首页';
    if(sectionId !== 'home') {
        breadcrumb += ` > ${sectionNames[sectionId]}`;
    }
    document.getElementById('breadcrumbText').innerText = breadcrumb + ' > ';
}



</script>