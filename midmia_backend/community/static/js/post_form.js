
function setSubcategories() {
    const categoryField = document.querySelector("#id_category");
    const subcategoryField = document.querySelector("#id_subcategory");
    
    // 선택한 카테고리 가져오기
    const selectedCategory = categoryField.value;
    
    // 선택한 카테고리에 따라 선택지 설정
    let subcategoryChoices = [];
    if (selectedCategory === "position") {
      subcategoryChoices = [
        { value: "top", label: "탑" },
        { value: "jungle", label: "정글" },
        { value: "mid", label: "미드" },
        { value: "bottom", label: "바텀" },
        { value: "support", label: "서폿" },
      ];
    } else if (selectedCategory === "free") {
      subcategoryChoices = [
        { value: "humor", label: "유머" },
        { value: "freef", label: "자유" },
      ];
    }
    
    // 기존의 선택지 비우기
    subcategoryField.innerHTML = "";
    
    // 선택지 추가
    subcategoryChoices.forEach(choice => {
      const option = document.createElement("option");
      option.value = choice.value;
      option.text = choice.label;
      subcategoryField.add(option);
    });
  }
  
  // 페이지 로드 시에 초기 선택지 설정
  window.addEventListener("DOMContentLoaded", () => {
    setSubcategories();
  });
  