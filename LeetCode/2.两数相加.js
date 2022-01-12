/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
//  定义一个新的节点
let dummy = new ListNode();
//  curr是用来遍历列表用的
 let curr = dummy;
  let carry = 0; //处理进位用
  while(l1 !== null || l2 !== null){
      let sum = 0;
      if(l1 !==null){
          sum += l1.val;
          l1 = l1.next;
      }
      if(l2 !== null){
          sum +=l2.val;
          l2= l2.next;
      }
    
      sum += carry; //检carry有没有进位
      curr.next = new ListNode( sum %10); 
      //把得到的sum值各位作为新的list的节点
      carry = Math.floor(sum/10);
       //如果有carry值 就暂存carry的值 carry的值是sum/10之后取整 只要整数 
       curr = curr.next  // curr往后挪一位
  }
  if(carry>0){
    curr.next = new ListNode(carry);
    // 如果最后的carry值大于0，需要单独做一个新节点（最前面的节点）
  }
  return dummy.next;//最后return出去
};

