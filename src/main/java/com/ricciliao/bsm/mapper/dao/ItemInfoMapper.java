package com.ricciliao.bsm.mapper.dao;

import com.ricciliao.bsm.pojo.ItemInfoPo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ItemInfoMapper {
    Integer createItem(ItemInfoPo itemInfoPo);
    void updateItem(ItemInfoPo itemInfoPo);
    ItemInfoPo getItemByGuid(String itemGuid);
    List<ItemInfoPo> getItemListForIndex();
}
